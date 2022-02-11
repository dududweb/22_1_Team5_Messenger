import * as S from './ChatContentsList_Style';
import ChatContent from './ChatContent';

export default function ChatContentsList({ contents, i, onRemove1, userid }) {
  return (
    <S.ContentsWrapper>
      <S.UserImage src={contents.profileImage} />
      <div>
        <S.UserNameDateWrapper>
          <S.UserName>{contents.useName}</S.UserName>
          <S.Date>{contents.date} PM</S.Date>
        </S.UserNameDateWrapper>

        {contents.content.map((data, i, userid, onRemove1) => {
          return (
            <ChatContent
              key={i}
              data={data}
              onRemove1={onRemove1}
              userid={userid}
            />
          );
        })}
      </div>
    </S.ContentsWrapper>
  );
}
