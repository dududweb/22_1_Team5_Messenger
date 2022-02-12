# Team5 응급코딩과 🚑

## 프로젝트 소개

### 로그인 기능

![Swit - Chrome 1](https://user-images.githubusercontent.com/84889602/153701527-df004d81-fda4-41da-b302-bf4ff2d56fef.gif)

### 채팅방 기능

![Swit - Chrome 2](https://user-images.githubusercontent.com/84889602/153701532-bc9ecfee-8be9-46ab-bb04-1fd6ded4d441.gif)

채팅 메신저 구현 <br/>
Redux, React-Redux를 활용하여 전역 상태 관리

### 📝 입력창

- [x] 엔터키 전송
- [x] 입력내용 유효성검사
- [ ] 입력내용 멀티라인 처리

### 📮 대화목록

- [x] 채팅 최신순정렬
- [x] 채팅 생성일자 표시
- [x] 채팅 추가기능
- [x] 채팅 삭제기능
- [ ] 채팅 답장기능
- [ ] 채팅 스크롤기능

### 🔐 로그인

- [x] 인풋창 유효성 검사
- [x] 유저 email, 닉네임 이미지 전역상태관리

## 배포 링크

<a href="https://nostalgic-wilson-ae40e3.netlify.app/">배포 링크</a>

## 개발 인원 및 기간

### 개발기간: 2022/2/10~2022/2/12

### 개발 인원: 프론트 4명

- <a href="https://github.com/wogh09">김재호</a>
- <a href="https://github.com/Moro-yong">김태영</a>
- <a href="https://github.com/dnjstd">원소연</a>
- <a href="https://github.com/dududweb">황주영</a>
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

  - 헤더 레이아웃 구현
  - 답장기능 레이아웃 작성
  - 답장 컴포넌트 조건부 랜더링으로 실행 및 userName과 Date 정보 출력

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

## 프로젝트 회고

- [`김재호`]

  -이런 프로젝트에 Redux를 작게나마 활용 해보며 어떻게 전역 상태 관리를 하는지와 Redux 의 단점과 장점을 공부하고 느끼며 전역 상태 관리의 필요성을 꺠달았습니다. 처음 적용해보며 쉽지않았지만 문제해결 능력이 또 한번 높아진것 같아 뿌듯합니다.  

- [`김태영`]

  - porps를 여러번 내려줄 때마다 전역상태 관리의 필요성을 느꼈고 이번 프로젝트에서 redux를 사용했습니다. 처음 사용하는 것이라 팀원 모두가 미숙하지만 한번 만들고 사용하게 되니 뎁스가 깊어도 쉽게 불러올 수 있고 컴포넌트 리렌더링이 적어서 redux를 알아갈수록 선녀처럼 보입니다. 새로운 기술을 배우는 것이 어렵지만 왜 이러한 기술이 생기고 사용되는지를 알아갈 수 있는 경험이었습니다.

- [`원소연`]

  - 메신저 구현 프로젝트에 redux를 처음으로 활용해볼 수 있었습니다. 저에겐 장벽이 느껴졌던 라이브러리인데, 이번 기회에 전역 상태 관리란 무엇인지 직접 기능을 구현하며 이해할 수 있었습니다.

- [`황주영`]

  - 리덕스를 처음 적용해보면서 다소 어려웠지만 적용하게 된 이후로 전역상태의 편리함을 몸소 느꼈습니다. 이번 리덕스를 적용시킬 때 팀원 모두가 모르는 상태였는데 팀원이 하나되어 같이 공부하고 공유하였기 때문에 리덕스를 적용할 수 있었던 것 같습니다. 또한 앞으로 더욱 공부해야할 부분도 파악하게 되어 뜻 깊었던 프로젝트였습니다.

<br/><br/>

## 설치 및 시작하는 법

- 파일 클론 받기
- git clone https://github.com/wogh09/22_1_Team5_Messenger.git
- npm install
- npm start
  </br>
