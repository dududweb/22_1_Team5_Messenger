import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { BsFillChatFill } from 'react-icons/bs';
import { BiDockTop } from 'react-icons/bi';
import { ImFolder } from 'react-icons/im';

export const HeaderWrap = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: thin solid lightgray;
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const StarIcon = styled(AiFillStar)`
  color: #b4b4b4;
`;

export const HeaderText = styled.div`
  padding: 0px 5px 0px 5px;
  font-weight: 600;
`;

export const CenterHeader = styled.div`
  display: flex;
`;

export const ChannelsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  padding: 5px 0px 5px 0px;
`;

export const FileIcon = styled(BsFillChatFill)`
  color: #1e90ff;
  font-size: 17px;
  padding-bottom: 5px;
`;

export const Channels = styled.div`
  color: #1e90ff;
`;

export const IdeationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #b4b4b4;
  padding: 5px 0px 5px 0px;
`;

export const IdeationIcon = styled(BiDockTop)`
  font-size: 17px;
  color: #b4b4b4;
  padding-bottom: 5px;
`;
export const Ideation = styled.div``;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  color: #b4b4b4;
`;

export const UserCount = styled.div`
  padding: 0px 5px 0px 5px;
`;

export const PinCount = styled.div`
  padding: 0px 5px 0px 5px;
`;

export const FileCount = styled.div`
  padding: 0px 5px 0px 5px;
`;

export const ZipBox = styled.div`
  margin-left: 30px;
  padding: 8px;
  border: 1px solid #b4b4b4;
`;

export const FolderIcon = styled(ImFolder)`
  color: black;
`;
