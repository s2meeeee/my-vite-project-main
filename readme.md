# 📦 My Vite Project
## 📌 프로젝트 개요
이 프로젝트는 Vite를 기반으로 한 웹 애플리케이션 프로젝트입니다. HTML, CSS, JavaScript를 활용하여 빠른 개발 및 번들링을 지원하며, 필요에 따라 플러그인을 추가하여 확장할 수 있습니다.

## 📂 프로젝트 구조
```
📦 my-vite-project
 ┣ 📂dist           # 빌드된 파일 저장 디렉터리
 ┣ 📂node_modules   # 프로젝트 의존성 패키지 (npm install 후 생성)
 ┣ 📂public         # 정적 리소스 (이미지, 폰트 등)
 ┣ 📂src            # 프로젝트 소스 코드
 ┃ ┣ 📂krds        # UI/UX 관련 리소스
 ┃ ┃ ┣ 📂css       # CSS 파일
 ┃ ┃ ┣ 📂js        # JavaScript 파일
 ┃ ┃ ┣ 📂scss      # SCSS 파일 (삭제 가능)
 ┃ ┃ ┣ 📂fonts     # 폰트 파일
 ┃ ┃ ┗ 📂img       # 이미지 파일
 ┣ 📜.gitignore     # Git 관리에서 제외할 파일 설정
 ┣ 📜about.html     # About 페이지
 ┣ 📜footer.html    # 공통 푸터 파일
 ┣ 📜header.html    # 공통 헤더 파일
 ┣ 📜index.html     # 메인 페이지
 ┣ 📜package.json   # 프로젝트 설정 및 의존성 목록
 ┣ 📜package-lock.json # 패키지 버전 잠금 파일
 ┣ 📜readme.md      # 프로젝트 개요 및 설명
 ┣ 📜scripts.js     # 공통 JavaScript 파일
 ┣ 📜style.css      # 공통 스타일시트 파일
 ┗ 📜vite.config.js # Vite 설정 파일
```

## 📌 npm 패키지 설치 목록

- 빌드 툴: Vite (vite@^6.2.0)

- HTML 플러그인: vite-plugin-html@^3.2.2

- UI/UX 라이브러리: krds-uiux@^1.0.3

## 프론트엔드 작업 방법

###  css 사용법
1. css 파일 생성 
2. style.css에 @import 하여 사용


### js 사용법
1. js파일 생성
2. scripts.js 에 import하여 사용

### HTML 생성
1. root에 파일생성하여 작업
2. 배포시 자동 배포됨

### public 폴더(정적인 파일 생성)
1. 이미지
2. 폰트

### src 폴더
번들링할 파일생성 (js/css 등등)


## 🚀 프로젝트 실행 방법

### 1️⃣ 프로젝트 클론

```
git clone https://github.com/your-repo/my-vite-project.git
cd my-vite-project
```

### 2️⃣ 의존성 설치

```
npm install
```

### 3️⃣ 개발 서버 실행

```
npm run dev
```

Vite 개발 서버가 실행되며, 브라우저에서 http://localhost:5173를 방문하면 프로젝트를 확인할 수 있습니다.

### 4️⃣ 빌드
```
npm run build
```
dist/ 디렉터리에 빌드된 정적 파일이 생성됩니다.


### 🛠 주요 기능

- Vite를 활용한 빠른 개발 및 번들링 지원

- src/krds 디렉터리를 통한 UI/UX 리소스 관리

- 공통 헤더/푸터 (header.html, footer.html) 분리하여 재사용성 향상

- public/ 디렉터리를 활용한 정적 리소스 관리


## krds 태그 샘플
/src/resources/krds/html/code/taglib.html
/src/resources/krds/html/sample/

### 📄 제작자
오청열