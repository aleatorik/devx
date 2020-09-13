# DevX : We are Explorers to Best Developer

---

## 프로젝트 소개

엘론머스크가 설립한 민간 우주기업 Space X 웹사이트 클론 프로젝트

<br>

## 개발 인원 및 기간

- 기간: 2020.08.18 - 2020.08.28 (약 2주)
- 개발 인원: 프론트엔드 [황연욱](https://github.com/younuk23), [이호현](https://github.com/LeeHoHyun-hemtory), [송다슬](https://github.com/aleatorik)(PM) 백엔드 [김기욱](https://github.com/keywookkim), [이지연](https://github.com/leejirun)
- 프론트 [Repository](https://github.com/wecode-bootcamp-korea/11-DevX-frontend) 백엔드 [Repository](https://github.com/wecode-bootcamp-korea/11-DevX-backend)

<br>

### 데모 영상

[https://www.youtube.com/watch?v=mBAsMK8By9w&t=8s](https://www.youtube.com/watch?v=mBAsMK8By9w&t=8s)

<br>

## 사용 기술

<br>

### 공통

1. HTTP

2. Git

3. Linux

4. VScode

5. Trello

- 프로젝트 스크럼 툴 ([링크](https://trello.com/b/7GVBeJ4W/wespace))

6. AWS

- AWS EC2 서버 배포
- AWS RDS 구축
- AWS S3 구축 및 이미지 업로더 연결

7. PostMan

- API 테스트 및 결과 내용 공유

<br>

### 프론트엔드

1. React.js

- react-router-dom : 브라우저에서 사용되는 리액트 라우터
- node-sass : Sass(.scss) 파일을 css 파일로 컴파일

2. SCSS

- SASS의 모든 기능을 지원하면서 CSS 구문과 완전히 호환됨

<br>

### 백엔드

1. Python

- BeautifulSoup : 웹 크롤링 및 파싱
- Selenium : 내장 기능을 활용해 다수의 웹 데이터를 효율적으로 크롤링
- List comprehension : 코드실행 효율 향상
- Pandas : 간편한 csv파일 저장 및 열람
- ast : list_eval 기능 사용

2. Django

- Bcrypt, PyJWT : 회원가입 시 기입한 비밀번호 암호화 및 토큰 발행
- UnitTest : 클래스 단위 코드 디버깅
- LoginDecorator : 발행한 토큰을 통한 등록회원 인증/인가
- Endpoint : User, Product, Order

3. MySQL

- DB 구축 및 데이터 업로더 제작

<br>

## 구현 페이지 및 기능

<br>

- 로그인 & 회원가입 기능
- 제품 소개(Falcon 9) 페이지

  - Stat컴포넌트 화면에 들어왔을 시 0 -> 해당 stat Value만큼 수치 증가 기능

  - 슬라이더 기능

  - Youtube Video Modal 창 기능

  - Modal mount, unmount 애니메이션

  - Parallax 스크롤 기능

  - Parallax부분에서 일정스크롤 이상 시 기존 컴포넌트와 오버랩되면서 Slider 컴포넌트 보여주는 기능

  - MenuTab 기능(선택된 Tab에 따라 다른 내용 렌더)

  - 일정 Scroll에 도달했을 시(해당 컴포넌트가 viewport안에 위치했을 시) text fadein Animation 기능

- 쇼핑 메인 페이지

  - Map 함수를 통한 상품 리스트 구현
  - Fetch를 통한 API 호출

- 상품 상세 페이지

  - 컬러 옵션 버튼 클릭 시, 팝업 모달 창 구현
  - 'add to cart' 버튼 클릭 시, 유저 토큰 인증 처리 후 해당 페이지 이동
  - SVG 컴포넌트화
