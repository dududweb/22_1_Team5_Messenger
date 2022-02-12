import * as S from './Login_Style';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  add_loginUser_info,
  add_ProfileImage,
} from '../../redux/action/loginAction';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [profileImage, setProfileImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );

  const uploadImage = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const changeUserIdInput = e => {
    const { value } = e.target;
    setUserEmail(value);
  };

  const changeUserNicknameInput = e => {
    const { value } = e.target;
    setUserNickname(value);
  };

  const saveUserDataInStore = () => {
    const userInputData = {
      userEmail: userEmail,
      nickname: userNickname,
    };
    dispatch(add_loginUser_info(userInputData));
    setUserEmail('');
    navigate('/main');
    dispatch(add_ProfileImage(profileImage));
  };

  const handleKeyPress = e => {
    e.preventDefault();
    if (e.key === 'Enter') {
      if (isLoginActiveButton) {
        setUserEmail();
        setUserNickname();
        navigate('/main');
      } else {
        alert('이메일과 닉네임을 모두 입력해주세요.');
      }
    }
  };

  const isLoginActiveButton =
    userEmail.includes('@') && userNickname.length > 0;

  const isPassedLogin = () => {
    return !isLoginActiveButton;
  };

  return (
    <>
      <S.Logo />
      <S.Login>
        <S.LoginWrap>
          <S.LoginTitle>So Swit</S.LoginTitle>
          <S.ProfileContainer>
            <S.RoundProfile>
              <S.ProfilePreviewImage src={profileImage} />
            </S.RoundProfile>
            <S.UploadBtn>
              <S.CameraIcon />
            </S.UploadBtn>
            <S.ProfileUpload onChange={uploadImage} />
          </S.ProfileContainer>
          <S.LoginForm
            method="POST"
            onSubmit={saveUserDataInStore}
            onKeyUp={isPassedLogin}
          >
            <S.Label>이메일</S.Label>
            <S.UserIdInput
              name="userEmail"
              onChange={changeUserIdInput}
              value={userEmail}
              onKeyUp={handleKeyPress}
            />
            <S.Label>닉네임</S.Label>
            <S.UserNicknameInput
              name="nickname"
              onChange={changeUserNicknameInput}
              value={userNickname}
              onKeyUp={handleKeyPress}
            />
            <S.FormSubmit
              isLoginActiveButton={isLoginActiveButton}
              disabled={!isLoginActiveButton}
            >
              Start Now
            </S.FormSubmit>
          </S.LoginForm>
        </S.LoginWrap>
      </S.Login>
    </>
  );
}
