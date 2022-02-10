import styled from 'styled-components';

export const Nav = styled.nav`
  width: 300px;
  height: 100vh;
  padding: 20px 12px;
  box-sizing: border-box;
  border-right: thin solid lightgray;
`;
export const NavConainer = styled.section`
  display: flex;
  align-items: center;
  padding: 20px 6px;
`;
export const NavConainerImg = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 6px;
`;
export const NavConainerText = styled.p`
  color: #478bff;
`;
export const ChannelsIndex = styled.section`
  margin-bottom: 20px;
`;
export const ChannelsConainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 6px;
`;
export const ChannelsName = styled.span`
  display: flex;
  align-items: center;
`;
export const ChannelsNameImg = styled.img`
  width: 12px;
  height: 12px;
  transform: rotate(90deg);
  margin-right: 8px;
`;
export const ChannelsNameText = styled.span`
  font-weight: 700;
`;
export const ChannelsPlus = styled.img`
  width: 20px;
  height: 20px;
`;
export const ChannelsList = styled.ul``;
export const Channels = styled.li`
  background-color: #e6e6e8;
  border-radius: 4px;
  padding: 8px 0 8px 26px;
  font-weight: 700;
`;
