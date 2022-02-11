import * as S from './Header_Style';
import { BiChevronDown } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillPinFill } from 'react-icons/bs';
import { RiFileCopyFill } from 'react-icons/ri';

export default function Header() {
  return (
    <S.HeaderWrap>
      <S.Header>
        <S.LeftHeader>
          <S.StarIcon />
          <S.HeaderText>Genernal</S.HeaderText>
          <BiChevronDown />
        </S.LeftHeader>
        <S.CenterHeader>
          <S.ChannelsBox>
            <S.FileIcon />
            <S.Channels>채널</S.Channels>
          </S.ChannelsBox>
          <S.IdeationBox>
            <S.IdeationIcon />
            <S.Ideation>아이디어</S.Ideation>
          </S.IdeationBox>
        </S.CenterHeader>
        <S.RightHeader>
          <FaUserAlt />
          <S.UserCount>5</S.UserCount>
          <BsFillPinFill />
          <S.PinCount>0</S.PinCount>
          <RiFileCopyFill />
          <S.FileCount>0</S.FileCount>
          <S.ZipBox>
            <S.FolderIcon />
          </S.ZipBox>
        </S.RightHeader>
      </S.Header>
    </S.HeaderWrap>
  );
}
