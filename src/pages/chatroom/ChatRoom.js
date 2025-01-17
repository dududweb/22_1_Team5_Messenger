import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as S from './ChatRoom_Style';
import ChatContentsList from './ChatContentsList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  add_user_inputText,
  add_user_inputText_delete,
} from '../../redux/action/inputChatAction';
import { add_current_date } from '../../redux/action/dateNowAction';
import { getClock } from '../../utils';

export default function ChatRoom() {
  const dispatch = useDispatch();
  const scrollRef = useRef();
  const userdata = useSelector(state => state.login.userinfo);
  const chatDate = useSelector(state => state.chatdate);
  const userChat = useSelector(state => state.input.chat);
  const [userMessage, setUserMessage] = useState('');
  const [ChatContents, setChatContents] = useState();
  const date = getClock();

  const [Reply, setReply] = useState(false);

  function ReplyInput() {
    setReply(prev => !prev);
  }

  useEffect(() => {
    axios
      .get('/data/data.json')
      .then(res => {
        setChatContents(res.data);
      })
      .catch(error => setChatContents(error));
  }, []);

  const changeInputText = e => {
    const { value } = e.target;
    setUserMessage(value);
  };

  const changeUserInputTextDispatch = () => {
    const userInputData = {
      chatList: userMessage,
    };
    if (userMessage !== '') {
      dispatch(add_user_inputText(userInputData));
      setUserMessage('');
    }
  };

  const pressUserInputTextDispatch = e => {
    const userInputData = {
      chatList: userMessage,
      date: date,
    };

    if (e.key === 'Enter') {
      if (userMessage !== '') {
        dispatch(add_user_inputText(userInputData));
        dispatch(add_current_date(date));
        setUserMessage('');
      }
    }
  };

  const removeUserMessage = e => {
    const id = Number(e.target.id);
    const index = userChat.map(x => x.id).indexOf(id);

    if (window.confirm(userChat[index].chatList.chatList.slice(0, 10))) {
      dispatch(add_user_inputText_delete(id));
    } else {
    }
  };

  return (
    <>
      <S.Container ref={scrollRef}>
        <S.LineWrapper>
          <S.Line />
          <S.DayText>Today</S.DayText>
          <S.Line />
        </S.LineWrapper>
        <div>
          {ChatContents?.map((contents, i) => {
            return (
              <ChatContentsList
                key={i}
                contents={contents}
                ReplyInput={ReplyInput}
              />
            );
          })}
        </div>
        {userChat.length >= 1 && (
          <S.UserMessageContainer>
            <S.UserImage src={userdata[1]} />
            <S.TextArea>
              <S.UserName>
                {userdata[0][1].nickname} * <S.Date>{chatDate[1]}</S.Date>
              </S.UserName>
              {userChat?.map((list, i) => {
                return (
                  <S.ContentsContainer key={i}>
                    <S.TypingText>{list.chatList.chatList}</S.TypingText>
                    <S.Reply onClick={ReplyInput} />
                    <S.Delete id={list.id} onClick={removeUserMessage} />
                  </S.ContentsContainer>
                );
              })}
            </S.TextArea>
          </S.UserMessageContainer>
        )}
      </S.Container>
      <S.MessageEditorContainer>
        {Reply ? (
          <S.ReplyContainer>
            <S.ReplyBox>
              <>
                <S.TextBox> {userdata[0][1].nickname}에게 답장</S.TextBox>
                <S.TextDate>{chatDate[1]}</S.TextDate>
                <S.DeleteIcon onClick={ReplyInput} />
              </>
            </S.ReplyBox>
          </S.ReplyContainer>
        ) : null}

        <S.MessageEditorWrapper>
          <S.PlusIcon />
          <S.TextInput
            placeholder="Enter message"
            onChange={changeInputText}
            onKeyUp={pressUserInputTextDispatch}
            value={userMessage}
          />
          <div>
            <S.TextIcon />
            <S.AtSignIcon />
            <S.EmojiIcon />
            <S.EnterIcon onClick={changeUserInputTextDispatch} />
          </div>
        </S.MessageEditorWrapper>
      </S.MessageEditorContainer>
    </>
  );
}
