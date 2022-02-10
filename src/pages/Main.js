import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import * as S from './Main_Style';

export default function Main() {
  return (
    <S.MainContainer>
      <Nav />
      <S.SubContainer>
        <Header />
        {/* 채팅내역 필드 위치??? */}
      </S.SubContainer>
    </S.MainContainer>
  );
}
