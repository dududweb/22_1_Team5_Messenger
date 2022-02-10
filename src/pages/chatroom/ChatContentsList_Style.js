import styled from 'styled-components';

export const ContentsWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const UserImage = styled.img`
  src: url(${props => props.src});
  background-color: #fff;
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 50%;
  overflow: hidden; ;
`;

export const UserNameDateWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 2px 20px;
`;

export const UserName = styled.span`
  margin-right: 8px;
  font-weight: 700;
`;

export const Date = styled.span`
  font-size: 12px;
  color: #8b8e95;
`;
