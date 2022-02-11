import * as S from './ChatContent_Style';

export default function ChatContent({ data, i, DeleteInput }) {
  return (
    <div>
      <S.MessageWrapper>
        <S.MessageText>{data}</S.MessageText>
        <S.Reply onClick={DeleteInput} />
        <S.Delete />
      </S.MessageWrapper>
    </div>
  );
}
