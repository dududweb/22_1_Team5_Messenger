import * as S from './ChatContent_Style';

export default function ChatContent({ data, onRemove, userid }) {
  return (
    <>
      <S.MessageWrapper>
        <S.MessageText>{data}</S.MessageText>
        <S.Reply />
        <S.Delete
        //  onClick={() => onRemove(userid.id)}
        />
      </S.MessageWrapper>
    </>
  );
}
