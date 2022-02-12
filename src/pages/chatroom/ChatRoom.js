import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as S from './ChatRoom_Style';
import ChatContentsList from './ChatContentsList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add_user_inputText } from '../../redux/action/inputChatAction';

export default function ChatRoom() {
  const dispatch = useDispatch();
  const scrollRef = useRef();
  const userdata = useSelector(state => state.login.userinfo);
  const userChat = useSelector(state => state.input.chat);
  const [userMessage, setUserMessage] = useState('');
  const [ChatContents, setChatContents] = useState();
  // const [chatHeight, setChatHeight] = useState();

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
    };

    if (e.key === 'Enter') {
      if (userMessage !== '') {
        dispatch(add_user_inputText(userInputData));
        setUserMessage('');
      }
    }
  };

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView.scrollTo(
      0,
      scrollRef.current.scrollHeight
    );
  };

  useEffect(() => {
    scrollToBottom();
  }, [userChat]);

  // scrollView.scrollTo((x = 0), (y = `View의 y position`));

  // useEffect(() => {
  //   height();
  // }, [userMessage]);
  // const height = () => {
  //   setChatHeight(scrollRef.current?.scrollHeight);
  // };
  // console.log('높이', scrollRef.current?.scrollHeight);
  // console.log(chatHeight);

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
            return <ChatContentsList key={i} contents={contents} />;
          })}
        </div>
        {userChat.length >= 1 && (
          <S.UserMessageContainer>
            <S.UserImage src="https://images.unsplash.com/photo-1534196511436-921a4e99f297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            <S.TextArea>
              <S.UserName>{userdata[1].nickname} *</S.UserName>
              {userChat?.map(list => {
                return (
                  <S.TypingText key={list.id}>
                    {list.chatList.chatList}
                  </S.TypingText>
                );
              })}
            </S.TextArea>
          </S.UserMessageContainer>
        )}
      </S.Container>
      <S.MessageEditorContainer>
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
