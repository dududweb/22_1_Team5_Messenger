import * as S from './Login_Style';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  add_loginUser_info,
  add_ProfileImage,
} from '../../redux/action/loginAction';
import { useNavigate } from 'react-router-dom';
import ProfileDefaultImg from '../../assets/icons/profile-default.jpeg';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');

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
      if (userEmail && userNickname !== '') {
        setUserEmail();
        setUserNickname();
        navigate('/main');
      } else {
        alert('아이디와 닉네임을 모두 입력해주세요.');
      }
    }
  };

  return (
    <>
      <S.Logo />
      <S.Login>
        <S.LoginWrap>
          <S.LoginTitle>So Swit</S.LoginTitle>
          <S.ProfileContainer>
            <S.RoundProfile>
              <S.ProfilePreviewImage
                src={profileImage ? profileImage : ProfileDefaultImg}
              />
            </S.RoundProfile>
            <S.UploadBtn>
              <S.CameraIcon />
            </S.UploadBtn>
            <S.ProfileUpload onChange={uploadImage} />
          </S.ProfileContainer>
          <S.LoginForm method="POST" onSubmit={saveUserDataInStore}>
            <S.Label>아이디</S.Label>
            <S.UserIdInput
              onChange={changeUserIdInput}
              value={userEmail}
              onKeyUp={handleKeyPress}
            />
            <S.Label>닉네임</S.Label>
            <S.UserNicknameInput
              onChange={changeUserNicknameInput}
              value={userNickname}
              onKeyUp={handleKeyPress}
            />
            <S.FormSubmit type="submit" onClick={saveUserDataInStore}>
              Start Now
            </S.FormSubmit>
          </S.LoginForm>
        </S.LoginWrap>
      </S.Login>
    </>
  );
}
