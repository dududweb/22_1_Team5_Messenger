import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './ChatRoom_Style';
import ChatContentsList from './ChatContentsList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add_user_inputText } from '../../redux/action/action.js';
import { MdOutlineCreate } from 'react-icons/md';

export default function ChatRoom() {
  const dispatch = useDispatch();
  let [ChatContents, setChatContents] = useState();
  const selector = useSelector(state => state.userinfo);
  const selector2 = useSelector(state => state.chat);

  useEffect(() => {
    axios
      .get('/data/data.json')
      .then(res => {
        setChatContents(res.data);
      })
      .catch(error => setChatContents(error));
  }, []);

  // ============================================================

  // ============================================================

  return (
    <>
      <S.Container>
        <S.LineWrapper>
          <S.Line />
          <S.DayText>Today</S.DayText>
          <S.Line />
        </S.LineWrapper>
        <div>
          {ChatContents?.map((contents, i) => {
            return <ChatContentsList key={i} contents={contents} />;
          })}
        </div>
        <div>
          <div>{selector[1].nickname}</div>
          <div>{selector2[selector2.length - 1]}</div>
        </div>
      </S.Container>
      <S.MessageEditorContainer>
        <S.MessageEditorWrapper onClick={handleSubmit}>
          <S.PlusIcon />
          <S.TextInput
            placeholder="Enter message"
            onChange={handleChange2}
            value={input}
          />
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
