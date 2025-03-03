"use strict";

// emptyAnchor
const emptyAnchor = () => {
    const tagA = document.querySelectorAll("a");
    tagA.forEach(item => {
        const href = item.getAttribute("href");
        item.addEventListener("click", (el) => {
            if (href === "#")
                el.preventDefault();
        }
        );
    }
    );
}
emptyAnchor();

// structuredList
const structuredList = () => {
    // 리스트 전체
    const checks = document.querySelectorAll(".krds-structured-list .structured-item");
    checks.forEach( (item) => {
        const checkbox = item.querySelector("input[type=checkbox]");
        // checkbox.setAttribute("tabindex", "-1");
        // checkbox.nextElementSibling.setAttribute("tabindex", "0");
        if (!checkbox)
            return;
        item.style.cursor = "pointer";
        if (checkbox.checked)
            item.classList.add("is-check");

        // 라벨 텍스트
        const badge = item.querySelector(".card-top .krds-badge").textContent.trim();
        const cardTitle = item.querySelector(".card-body .c-tit").textContent.trim();

        checkbox.setAttribute("aria-label", `${badge} > ${cardTitle}`);

        // console.log(checkbox.getAttribute("aria-label"));

        // 라벨에 포커스 스타일
        checkbox.addEventListener("focus", () => {
            const styles = {
                "outline": "0.2rem solid #fff",
                "outline-offset": "0",
                "box-shadow": "0 0 0 0.4rem #256ef4",
                "transition": "outline 0s, box-shadow 0s !important",
            };
            Object.entries(styles).forEach( ([key,value]) => {
                checkbox.nextElementSibling.style.setProperty(key, value);
            }
            );
        }
        );
        checkbox.addEventListener("focusout", () => {
            checkbox.nextElementSibling.style = "";
        }
        );

        // 체크박스 클릭
        checkbox.addEventListener("click", (event) => {
            event.stopPropagation();
            event.target.closest(".structured-item").classList.toggle("is-check");
        }
        );
        item.addEventListener("click", (event) => {
            const triggers = item.querySelectorAll("button, a");
            if (!Array.from(triggers).includes(event.target.closest("a")) && !Array.from(triggers).includes(event.target.closest("button"))) {
                event.preventDefault();
                event.target.closest(".structured-item").classList.toggle("is-check");
                if (item.classList.contains("is-check")) {
                    checkbox.checked = true;
                } else {
                    checkbox.checked = false;
                }
            }
        }
        );
    }
    );

    // 체크박스
    // const checks = document.querySelectorAll(".krds-structured-list .structured-item input[type=checkbox]");
    // checks.forEach((item) => {
    //   const listItem = item.closest(".structured-item");
    //   if (item.checked) listItem.classList.add("is-check");
    //   item.addEventListener("click", () => {
    //     listItem.classList.toggle("is-check");
    //   });
    // });
}
structuredList();

// form-check ico-only focus
const labelFocus = () => {
    const checkBoxs = document.querySelectorAll(".box-sec .krds-table-wrap .krds-form-check.ico-only input[type=checkbox]");

    checkBoxs.forEach( (check) => {
        check.addEventListener("focus", () => {
            const styles = {
                "outline": "0.2rem solid #fff",
                "outline-offset": "0",
                "box-shadow": "0 0 0 0.4rem #256ef4",
                "transition": "outline 0s, box-shadow 0s !important",
            };
            Object.entries(styles).forEach( ([key,value]) => {
                check.nextElementSibling.style.setProperty(key, value);
            }
            );
        }
        );
        check.addEventListener("focusout", () => {
            check.nextElementSibling.style = "";
        }
        );
    }
    );
}
labelFocus();

// addrSch
function addrSch() {
    const $addr = document.querySelector('#sch-result-addr');
    const $tblNo = document.querySelector('#sch-tbl-no');
    const $tbl = document.querySelector('#sch-result-tbl');
    $addr.style.display = 'block';
    $tblNo.style.display = 'none';
    $tbl.style.display = 'block';
}

// displaySettings
const displaySettings = () => {
    const adjustDisplay = document.getElementById("modal_adjust_display");

    if (!adjustDisplay)
        return;

    // 모달 배경 투명
    const modalBack = adjustDisplay.querySelector(".modal-back");
    modalBack.style.backgroundColor = "transparent";

    // 화면조정 모달 설정
    const root = document.querySelector("html");
    const scaleOptions = adjustDisplay.querySelectorAll(".scale-options .krds-form-check input[type=radio]");
    const viewModeOptions = adjustDisplay.querySelectorAll(".view-mode-options .krds-form-check input[type=radio]");
    const resetDisplay = document.getElementById("reset_display");

    const defaultScale = adjustDisplay.querySelector("#scale_level_medium");
    const defaultViewMode = adjustDisplay.querySelector("#view_mode_light");
    let selectedScale = 1;
    let selectedViewMode = defaultViewMode.value;

    // root 변수에서 스케일 값을 가져오기
    const rootStyles = getComputedStyle(document.querySelector(":root"));
    const getScaleValue = (scale) => {
        return rootStyles.getPropertyValue(`--krds-zoom-${scale}`).trim();
    }
    ;

    // 초기값
    root.setAttribute("data-krds-mode", selectedViewMode);

    // getLocalItem
    const getLocalItem = () => {
        const savedScale = localStorage.getItem("displayScale");
        const savedMode = localStorage.getItem("displayMode");
        if (savedScale) {
            selectedScale = savedScale;
            krds_adjustContentScale.scaleValue(savedScale);
            scaleOptions.forEach( (option) => {
                const checkOption = getScaleValue(option.value);
                if (checkOption === savedScale)
                    option.checked = true;
            }
            );
        }
        if (savedMode) {
            selectedViewMode = savedMode;

            // view mode
            if (savedMode === "theme") {
                root.removeAttribute("data-krds-mode");
                // root.style.forcedColorAdjust = "unset";
            } else {
                root.setAttribute("data-krds-mode", savedMode);
                // root.style.forcedColorAdjust = "none";
            }

            viewModeOptions.forEach( (option) => {
                if (option.value === savedMode)
                    option.checked = true;
            }
            );
        }
    }
    ;
    getLocalItem();

    // setLocalItem
    const setLocalItem = () => {
        localStorage.setItem("displayScale", selectedScale);
        localStorage.setItem("displayMode", selectedViewMode);

        setscaledLayout();
    }
    ;

    // setscaledLayout
    const setscaledLayout = () => {
        const zoomLevel = document.body.style.zoom;
        const wrap = document.getElementById("wrap");
        if (window.innerWidth >= 1024 && zoomLevel > 1) {
            wrap.classList.add("krds-scaled-layout");
        } else {
            wrap.classList.remove("krds-scaled-layout");
        }
    }
    ;
    setscaledLayout();

    window.addEventListener("resize", () => {
        setscaledLayout();
    }
    );

    // applyDisplay
    const applyDisplay = () => {
        krds_adjustContentScale.scaleValue(selectedScale);

        // view mode
        if (selectedViewMode === "theme") {
            root.removeAttribute("data-krds-mode");
            // root.style.forcedColorAdjust = "unset";
        } else {
            root.setAttribute("data-krds-mode", selectedViewMode);
            // root.style.forcedColorAdjust = "none";
        }

        // 선택한 값을 로컬 스토리지에 저장
        setLocalItem();

        // 새로고침
        // location.reload();
    }
    ;

    // scaleOptions
    scaleOptions.forEach( (option) => {
        option.addEventListener("click", () => {
            const scale = option.value;
            selectedScale = getScaleValue(scale);
            applyDisplay();
        }
        );
    }
    );

    // viewModeOptions
    viewModeOptions.forEach( (option) => {
        option.addEventListener("click", () => {
            selectedViewMode = option.value;
            applyDisplay();
        }
        );
    }
    );

    // resetDisplay
    resetDisplay.addEventListener("click", () => {
        defaultScale.checked = true;
        defaultViewMode.checked = true;

        selectedScale = 1;
        krds_adjustContentScale.scaleValue(selectedScale);

        selectedViewMode = defaultViewMode.value;
        root.setAttribute("data-krds-mode", selectedViewMode);
        // root.style.forcedColorAdjust = "none";

        // 선택한 값을 로컬 스토리지에 저장
        setLocalItem();

        // 새로고침
        // location.reload();
    }
    );
}
;
displaySettings();
