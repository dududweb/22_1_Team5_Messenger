import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './ChatRoom_Style';
import ChatContentsList from './ChatContentsList';
import { useSelector, useDispatch } from 'react-redux';
import { add_user_inputText } from '../../redux/action/action.js';

export default function ChatRoom() {
  const dispatch = useDispatch();
  let [ChatContents, setChatContents] = useState();
  const [chatInput, setChatInput] = useState('');
  const selector = useSelector(state => state.userinfo);
  const selector2 = useSelector(state => state);
  // console.log(selector);
  console.log(selector2);

  useEffect(() => {
    axios
      .get('/data/data.json')
      .then(res => {
        setChatContents(res.data);
      })
      .catch(error => setChatContents(error));
  }, []);

  const getChatInput = e => {
    const { value } = e.target;
    setChatInput(value);
  };

  const submitChat = e => {
    e.preventDefault();
    dispatch(add_user_inputText(chatInput));
    setChatInput('');
  };

  const handleKeyPress = e => {
    e.key === 'Enter' && submitChat();
  };

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
          {/* <div>{selector[1].nickname}</div>
          <div>{selector[1].userEmail}</div>
          <div>{selector[1].contents}</div> */}
        </div>
      </S.Container>
      <S.MessageEditorContainer>
        <S.MessageEditorWrapper>
          <S.PlusIcon />
          <S.TextInput
            placeholder="Enter message"
            onChange={getChatInput}
            value={chatInput}
            onKeyDown={handleKeyPress}
          />
          <div>
            <S.TextIcon />
            <S.AtSignIcon />
            <S.EmojiIcon />
            <S.EnterIcon onClick={submitChat} />
          </div>
        </S.MessageEditorWrapper>
      </S.MessageEditorContainer>
    </>
  );
}
