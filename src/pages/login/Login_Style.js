import styled from 'styled-components';
import { HiOutlineCamera } from 'react-icons/hi';
import LogoImage from '../../assets/logo-big.svg';

export const Logo = styled.img.attrs({
  src: LogoImage,
})`
  margin: 20px;
`;

export const Login = styled.section`
  width: 400px;
  margin: 0 auto;
  background: #f8f8f8;
  padding: 70px;
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const LoginTitle = styled.blockquote`
  font-size: 30px;
  font-weight: bold;
`;

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const RoundProfile = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfilePreviewImage = styled.img.attrs(props => ({}))`
  width: 100%;
`;

export const UploadBtn = styled.label.attrs({
  htmlFor: 'fileInput',
})`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
`;

export const CameraIcon = styled(HiOutlineCamera)`
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
`;

export const ProfileUpload = styled.input.attrs({
  id: 'fileInput',
  type: 'file',
  accept: 'image/*',
})`
  position: absolute;
  bottom: 0;
  display: none;
`;

export const LoginForm = styled.form`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Label = styled.label`
  font-size: 10px;
  color: #2b2b2b;
  align-self: flex-start;
  margin: 20px 0 5px 0;
`;

export const UserIdInput = styled.input.attrs({
  type: 'text',
  placeholder: 'ID를 입력해주세요.',
})`
  width: 100%;
  padding: 10px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
`;

export const UserNicknameInput = styled.input.attrs({
  type: 'text',
  placeholder: '닉네임을 입력해주세요.',
})`
  width: 100%;
  padding: 10px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
`;

export const FormSubmit = styled.button.attrs({
  type: 'button',
})`
  margin-top: 40px;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #478bff;
`;
