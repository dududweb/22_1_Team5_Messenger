import * as S from './Header_Style';
import { AiFillStar } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { BsFillChatFill } from 'react-icons/bs';
import { BiDockTop } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <S.HeaderWrap>
      <S.Header>
        <S.LeftHeader>
          <AiFillStar />
          <S.HeaderText>Genernal</S.HeaderText>
          <BiChevronDown />
        </S.LeftHeader>
        <S.CenterHeader>
          <S.ChannelsBox>
            <BsFillChatFill />
            <S.Channels>Channels</S.Channels>
          </S.ChannelsBox>
          <S.IdeationBox>
            <BiDockTop />
            <S.Ideation>Ideation</S.Ideation>
          </S.IdeationBox>
        </S.CenterHeader>
        <S.RightHeader>
          <FaUserAlt />
          <S.UserCount>5</S.UserCount>
        </S.RightHeader>
      </S.Header>
    </S.HeaderWrap>
  );
}
