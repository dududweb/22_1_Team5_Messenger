import styled from 'styled-components';
import ProfileDefaultImg from '../../assets/icons/profile-default.jpeg';

export const Login = styled.section`
  width: 800px;
  margin: 0 auto;
  background: #eeeeee;
  padding: 70px;
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #e33;
`;

export const LoginTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

export const ProfileContainer = styled.div``;

export const RoundProfile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfilePreviewImage = styled.img.attrs(props => ({
  src: props.Img || ProfileDefaultImg,
}))`
  width: 100%;
`;

export const ProfileUpload = styled.input.attrs({
  type: 'file',
  size: '1em',
})``;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserIdInput = styled.input.attrs({
  type: 'text',
  placeholder: 'ID를 입력해주세요.',
})``;

export const UserNicknameInput = styled.input.attrs({
  type: 'text',
  placeholder: '닉네임을 입력해주세요.',
})``;

export const FormSubmit = styled.button.attrs({
  type: 'button',
})``;
