import * as S from './Login_Style';
import { HiOutlineCamera } from 'react-icons/hi';

export default function Login() {
  return (
    <S.Login>
      <S.LoginWrap>
        <S.LoginTitle>Swit 회원가입</S.LoginTitle>
        <S.ProfileContainer>
          <S.RoundProfile>
            <S.ProfilePreviewImage src="" />
          </S.RoundProfile>
          <S.ProfileUpload />
        </S.ProfileContainer>
        <S.LoginForm>
          <S.UserIdInput />
          <S.UserNicknameInput />
          <S.FormSubmit>Start Now</S.FormSubmit>
        </S.LoginForm>
      </S.LoginWrap>
    </S.Login>
  );
}
