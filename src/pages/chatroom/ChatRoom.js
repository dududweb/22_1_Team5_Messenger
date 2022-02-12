import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './ChatRoom_Style';
import ChatContentsList from './ChatContentsList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add_user_inputText } from '../../redux/action/inputChatAction';
import { delete_user_inputText } from '../../redux/action/deleteAction';

export default function ChatRoom() {
  const dispatch = useDispatch();
  const userdata = useSelector(state => state.login.userinfo);
  const userChat = useSelector(state => state.input.chat);
  const [userMessage, setUserMessage] = useState('');
  const [ChatContents, setChatContents] = useState();

  const [Reply, setReply] = useState(false);

  function DeleteInput() {
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
    };

    if (e.key === 'Enter') {
      if (userMessage !== '') {
        dispatch(add_user_inputText(userInputData));
        setUserMessage('');
      }
    }
  };

  const onRemove = userId => {
    dispatch(delete_user_inputText(userId));
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
            return (
              <ChatContentsList
                key={i}
                contents={contents}
                DeleteInput={DeleteInput}
              />
            );
          })}
        </div>
        {userChat.length >= 1 && (
          <S.UserMessageContainer>
            <S.UserImage src={userdata[1]} />
            <span>
              <S.UserName>{userdata[0][1].nickname}</S.UserName>
              {userChat?.map((list, i) => {
                return (
                  <S.ContentsContainer key={i}>
                    <S.TypingText key={list.id}>
                      {list.chatList.chatList}
                    </S.TypingText>
                    <S.Reply onClick={DeleteInput} />
                    <S.Delete onClick={() => onRemove(list.id)} />
                  </S.ContentsContainer>
                );
              })}
            </span>
          </S.UserMessageContainer>
        )}
      </S.Container>
      <S.MessageEditorContainer>
        {Reply ? (
          <S.ReplyContainer>
            <S.ReplyBox>
              <S.ReplyIconBox>
                <S.ReplyIcon />
              </S.ReplyIconBox>
              <S.TextBox>DATA 에게 답장</S.TextBox>
              <S.Textdetail>바보똥개 멍청이</S.Textdetail>
              <S.TextDate>2202.01.13</S.TextDate>
              <S.DeleteIcon onClick={DeleteInput} />
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
