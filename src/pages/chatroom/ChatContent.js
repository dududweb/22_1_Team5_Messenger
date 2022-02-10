import * as S from './ChatContent_Style';

export default function ChatContent({ data, i }) {
  return (
    <>
      <S.MessageWrapper>
        <S.MessageText>{data}</S.MessageText>
        <S.Reply />
        <S.Delete />
      </S.MessageWrapper>
    </>
  );
}
