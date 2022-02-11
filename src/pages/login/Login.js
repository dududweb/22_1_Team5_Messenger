import * as S from './Login_Style';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_loginUser_info } from '../../redux/action/action.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector(state => state.userinfo);
  const [userEmail, setUserEmail] = useState('');
  const [userNickname, setUserNickname] = useState('');
  // console.log('userNickname>>', userNickname);
  // console.log('userEmail>>', userEmail);
  // console.log('selector>>', selector);

  const handleChange = e => {
    const { value } = e.target;
    setUserEmail(value);
  };
  const handleChange2 = e => {
    const { value } = e.target;
    setUserNickname(value);
  };

  const handleClick = () => {
    const userInputData = {
      userEmail: userEmail,
      nickname: userNickname,
    };
    // console.log('userInputData', userInputData);
    dispatch(add_loginUser_info(userInputData));
    setUserEmail('');
    navigate('/main');
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      if (userEmail && userNickname === true) {
        handleClick();
      }
    }
  };

  return (
    <>
      <S.Logo />
      <S.Login>
        <S.LoginWrap>
          <S.LoginTitle>"Swit Simple, All In One"</S.LoginTitle>
          <S.ProfileContainer>
            <S.RoundProfile>
              <S.ProfilePreviewImage src="/" />
            </S.RoundProfile>
            <S.UploadBtn>
              <S.Test />
            </S.UploadBtn>
            <S.ProfileUpload />
          </S.ProfileContainer>
          <S.LoginForm>
            <S.Label>아이디</S.Label>
            <S.UserIdInput
              onChange={handleChange}
              value={userEmail}
              onKeyDown={handleKeyPress}
            />
            <S.Label>닉네임</S.Label>
            <S.UserNicknameInput
              onChange={handleChange2}
              value={userNickname}
              onKeyDown={handleKeyPress}
            />
            <S.FormSubmit onClick={handleClick}>Start Now</S.FormSubmit>
          </S.LoginForm>
        </S.LoginWrap>
      </S.Login>
    </>
  );
}
