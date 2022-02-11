import * as S from './ChatContent_Style';

export default function ChatContent({ data, onRemove1, userid }) {
  return (
    <>
      <S.MessageWrapper>
        <S.MessageText>{data}</S.MessageText>
        <S.Reply />
        <S.Delete onClick={() => onRemove1(userid.id)} />
      </S.MessageWrapper>
    </>
  );
}
