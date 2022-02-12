import * as S from './ChatContent_Style';

export default function ChatContent({ data, i, ReplyInput }) {
  return (
    <div>
      <S.MessageWrapper>
        <S.MessageText>{data}</S.MessageText>
        <S.Reply onClick={ReplyInput} />
        <S.Delete />
      </S.MessageWrapper>
    </div>
  );
}
