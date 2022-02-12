# Team5 응급코딩과 🚑

## 프로젝트 소개
로그인 기능



https://user-images.githubusercontent.com/84889602/153701354-ddec3dc0-aa58-40b5-8ed5-759b7460bd93.mp4

채팅방 기능





채팅 메신저 구현 <br/>
Redux, React-Redux를 활용하여 전역 상태 관리

### 입력창

- [x] 엔터키 전송
- [x] 입력내용 유효성검사
- [ ] 입력내용 멀티라인 처리

### 대화목록

- [x] 채팅 최신순정렬
- [x] 채팅 스크롤
- [x] 채팅 생얼일자 표시
- [x] 채팅 추가기능
- [x] 채팅 삭제기능
- [ ] 채팅 답장기능

### 로그인

- [x] 인풋창 유효성 검사
- [x] 유저 email, 닉네임 이미지 전역상태관리

## 배포 링크

<a href="https://nostalgic-wilson-ae40e3.netlify.app/">배포 링크</a>

## 개발 인원 및 기간

### 개발기간: 2022/2/10~2022/2/12

### 개발 인원: 프론트 4명

김재호, 김태영, 원소연, 황주영
<br/><br/>

## 적용 기술 및 협업 툴

### 적용 기술

- Front-End: React.js, React Router, Styled-Component, Redux
- Common: netlify

### 소통 툴

- Git, Github, Slack, Discord, <a href="https://olive-trapezoid-dec.notion.site/4-Swit-e7c4a7f8bf2e4cf09ea9c1267f0c5d02">Notion</a>

<br/><br/>

## 역할

- [`김재호`]

  -헤더 레이아웃 구현
  -답장기능 레이아웃 작성
  -답장 컴포넌트 조건부 랜더링으로 실행 및 userName과 Date 정보 출력
  

- [`김태영`]

  - 레이아웃: 좌측 네비게이션 레이아웃 작성
  - 입력창
    - input value를 엔터키로 전송
    - state에 저장된 데이터가 없을 경우 컨텐츠를 입력하지 않으면 전송 불가능 하도록 작성
  - 메시지
    - 내가 전송한 메시지 \* 표시
    - confirm() 함수를 사용하여 삭제버튼 클릭 시 메시지 출력
  - redux:
    - message 추가, 삭제 reducer, action, store

- [`원소연`]

  - 채팅창 레이아웃 구현
  - mock data 데이터 바인딩
  - redux를 활용하여 삭제 로직 초안작성

- [`황주영`]

  - 로그인 페이지 레이아웃 구현, 유효성 검사처리.
  - 이미지업로드 기능 및 이미지 redux 전역상태관리 구현.
  - 체팅 작성 일자 표시 기능 추가 및 redux 전역상태관리 구현.

<br/><br/>

## 설치 및 시작하는 법

- 파일 클론 받기
- git clone https://github.com/wogh09/22_1_Team5_Messenger.git
- npm install
- npm start
  </br>
