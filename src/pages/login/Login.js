import * as S from './Login_Style';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_loginUser_info } from '../../redux/action/loginAction';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileDefaultImg from '../../assets/icons/profile-default.jpeg';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [profileImage, setProfileImage] = useState({
    privewImgUrl: '',
    profileFile: '',
  });

  const uploadImage = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setProfileImage({
        profileFile: file,
        privewImgUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  console.log(profileImage.privewImgUrl);

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
    // console.log('userInputData', userInputData);
    dispatch(add_loginUser_info(userInputData));
    setUserEmail('');
    navigate('/main');
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      if (userEmail && userNickname === true) {
        setUserEmail();
        setUserNickname();
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
                src={
                  profileImage.privewImgUrl
                    ? profileImage.privewImgUrl
                    : ProfileDefaultImg
                }
              />
            </S.RoundProfile>
            <S.UploadBtn>
              <S.CameraIcon />
            </S.UploadBtn>
            <S.ProfileUpload onChange={uploadImage} />
          </S.ProfileContainer>
          <S.LoginForm>
            <S.Label>아이디</S.Label>
            <S.UserIdInput
              onChange={changeUserIdInput}
              value={userEmail}
              onKeyDown={handleKeyPress}
            />
            <S.Label>닉네임</S.Label>
            <S.UserNicknameInput
              onChange={changeUserNicknameInput}
              value={userNickname}
              onKeyDown={handleKeyPress}
            />
            <S.FormSubmit onClick={saveUserDataInStore}>Start Now</S.FormSubmit>
          </S.LoginForm>
        </S.LoginWrap>
      </S.Login>
    </>
  );
}
