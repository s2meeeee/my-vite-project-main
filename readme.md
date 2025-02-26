# 📦 My Vite Project
이 프로젝트는 Vite를 사용하여 빌드하고 krds uiux 플러그인을 접목시킨 정적인 웹 프로젝트입니다.
헤더와 푸터는 공통 파일을 포함하는 방식으로 관리되며, SCSS를 활용한 스타일링과 이미지 최적화 등이 적용되었습니다.


## 📂 프로젝트 구조
📦 my-vite-project
┣ 📂 public
┣ 📂 src
┃ ┣ 📂 resources
┃ ┃ ┣ 📂 scss
┃ ┃ ┣ 📂 css
┃ ┃ ┣ 📂 js
┃ ┃ ┣ 📂 fonts
┃ ┃ ┗ 📂 img
┃ ┗ 📜 style.css
┣ 📂 dist
┣ 📜 index.html
┣ 📜 about.html
┣ 📜 header.html
┣ 📜 footer.html
┣ 📜 package.json
┣ 📜 vite.config.js
┗ 📜 README.md


## 📂 디렉터리 및 파일 설명
### 📂 public/
정적인 파일들이 위치하는 폴더입니다.
img/ 폴더에는 프로젝트에서 사용하는 이미지가 포함됩니다.
### 📂 src/
프로젝트의 소스 코드가 포함된 폴더입니다.
resources/ 안에는 CSS, SCSS, JS, 폰트 및 이미지 리소스가 정리되어 있습니다.
### 📂 resources/scss/
SCSS 파일들이 저장됩니다.
common/ 폴더에는 프로젝트 전체에서 공통으로 사용하는 SCSS가 위치합니다.
component/ 폴더에는 개별 컴포넌트별 SCSS가 포함됩니다.
### 📂 resources/css/
SCSS에서 변환된 CSS 파일이 위치합니다.
### 📂 resources/js/
자바스크립트 관련 파일이 저장됩니다.
component/ 폴더에는 UI와 관련된 JS 파일이 포함됩니다.
### 📂 resources/fonts/
프로젝트에서 사용하는 폰트 파일(woff, woff2)이 포함됩니다.
### 📂 resources/img/
아이콘 및 기타 이미지 리소스가 포함된 폴더입니다.


### 📂 dist/
vite build 명령어 실행 시 생성되는 배포용 파일이 저장됩니다.
html CSS, JS 및 이미지가 최적화된 상태로 저장됩니다.


## 📜 주요 파일 설명
### 📜 index.html
메인 페이지입니다.
{{header}}와 {{footer}}를 포함하여 vite.config.js에서 변환됩니다.
### 📜 about.html
"About" 페이지로, index.html과 동일한 구조를 가짐.
{{header}}와 {{footer}}를 사용하여 공통 레이아웃을 유지함.
### 📜 header.html
사이트의 헤더 부분을 포함한 파일.
### 📜 footer.html
사이트의 푸터 부분을 포함한 파일.
### 📜 vite.config.js
Vite의 설정 파일입니다.
header.html, footer.html을 자동으로 HTML에 삽입하는 기능이 포함됨.
build.rollupOptions.input을 설정하여 여러 HTML 파일을 번들링.
### 📜 package.json
프로젝트의 의존성 및 npm 스크립트를 정의한 파일입니다.
실행 가능한 주요 스크립트:
npm run dev : 개발 서버 실행
npm run build : 정적 파일을 dist/ 폴더에 생성



## 🚀 설치 및 실행 방법
### 1️⃣ 프로젝트 클론
git clone https://github.com/your-repo/my-vite-project.git
cd my-vite-project

### 2️⃣ 필요한 패키지 설치
npm install

### 3️⃣ 개발 서버 실행
npm run dev
👉 localhost:5173에서 웹사이트를 확인할 수 있습니다.

### 4️⃣ 프로젝트 빌드
npm run build
👉 dist/ 폴더에 최적화된 정적 파일이 생성됩니다.

