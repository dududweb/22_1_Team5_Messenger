import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './ChatRoom_Style';
import ChatContentsList from './ChatContentsList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add_user_inputText } from '../../redux/action/action.js';

export default function ChatRoom() {
  const dispatch = useDispatch();
  let [ChatContents, setChatContents] = useState();
  const selector = useSelector(state => state.userinfo);
  const selector2 = useSelector(state => state.chat);
  console.log(selector);
  console.log(selector2);

  useEffect(() => {
    axios
      .get('/data/data.json')
      .then(res => {
        setChatContents(res.data);
      })
      .catch(error => setChatContents(error));
  }, []);

  // ============================================================
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState([]);
  console.log(input);
  console.log(input2);

  const handleChange2 = e => {
    const { value } = e.target;
    setInput(value);
  };

  const handleChange3 = e => {
    e.preventDefault();
    setInput2([...input2, input]);
    setInput('');

    const userInputData = input2;

    dispatch(add_user_inputText(userInputData));
  };

  // const handleClick = () => {
  //   const userInputData = input2;

  //   dispatch(add_user_inputText(userInputData));
  // };
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
          {/* <div>{selector[1].nickname}</div>
          <div>{selector[1].userEmail}</div>
          <div>{selector[1].contents}</div> */}
        </div>
      </S.Container>
      <S.MessageEditorContainer>
        <S.MessageEditorWrapper onClick={handleChange3}>
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
