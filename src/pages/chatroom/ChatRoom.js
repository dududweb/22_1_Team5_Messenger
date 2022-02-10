import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './ChatRoom_Style';
import ChatContentsList from './ChatContentsList';

export default function ChatRoom() {
  let [ChatContents, setChatContents] = useState();

  useEffect(() => {
    axios
      .get('/data/data.json')
      .then(res => {
        setChatContents(res.data);
      })
      .catch(error => setChatContents(error));
  }, []);

  return (
    <>
      <S.Container>
        <S.LineWrapper>
          <S.Line />
          <S.DayText>Today</S.DayText>
          <S.Line />
        </S.LineWrapper>
        {ChatContents?.map((contents, i) => {
          return <ChatContentsList key={i} contents={contents} />;
        })}
      </S.Container>
      <S.MessageEditorContainer>
        <S.MessageEditorWrapper>
          <S.PlusIcon />
          <S.TextInput placeholder="Enter message" />
          <div>
            <S.TextIcon />
            <S.AtSignIcon />
            <S.EmojiIcon />
            <S.EnterIcon />
          </div>
        </S.MessageEditorWrapper>
      </S.MessageEditorContainer>
    </>
  );
}
