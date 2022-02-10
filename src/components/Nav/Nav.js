import * as S from './Nav_style';
import Arrow from '../../assets/arrow.svg';
import Menu from '../../assets/iconmonstr-menu-2.svg';
import Plus from '../../assets/iconmonstr-plus-circle-thin.svg';

export default function Nav() {
  return (
    <S.Nav>
      <S.NavConainer>
        <S.NavConainerImg src={Menu} alt="img" />
        <S.NavConainerText>Browse Channels</S.NavConainerText>
      </S.NavConainer>
      <S.ChannelsIndex>
        <S.ChannelsConainer>
          <S.ChannelsName>
            <S.ChannelsNameImg src={Arrow} alt="img" />
            <S.ChannelsNameText>Channels</S.ChannelsNameText>
          </S.ChannelsName>

          <S.ChannelsPlus src={Plus} alt="img" />
        </S.ChannelsConainer>
        <S.ChannelsList>
          <S.Channels>General</S.Channels>
        </S.ChannelsList>
      </S.ChannelsIndex>
      <S.ChannelsIndex>
        <S.ChannelsConainer>
          <S.ChannelsName>
            <S.ChannelsNameImg src={Arrow} alt="img" />
            <S.ChannelsNameText>Direct messages</S.ChannelsNameText>
          </S.ChannelsName>

          <S.ChannelsPlus src={Plus} alt="img" />
        </S.ChannelsConainer>
      </S.ChannelsIndex>
    </S.Nav>
  );
}
