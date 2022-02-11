import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';
import { HiOutlineReply } from 'react-icons/hi';

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MessageText = styled.div`
  padding: 4px 10px 4px 20px;
  margin-right: 8px;
`;

export const Delete = styled(TiDeleteOutline)``;

export const Reply = styled(HiOutlineReply)``;
