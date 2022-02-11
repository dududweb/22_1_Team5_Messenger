import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import ChatRoom from './chatroom/ChatRoom';
import * as S from './Main_Style';

export default function Main() {
  return (
    <S.MainContainer>
      <Nav />
      <S.SubContainer>
        <Header />
        <ChatRoom />
      </S.SubContainer>
    </S.MainContainer>
  );
}
