import * as S from './Login_Style';

export default function Login() {
  return (
    <>
      <S.Logo />
      <S.Login>
        <S.LoginWrap>
          <S.LoginTitle>"Swit Simple, All In One"</S.LoginTitle>
          <S.ProfileContainer>
            <S.RoundProfile>
              <S.ProfilePreviewImage src="" />
            </S.RoundProfile>
            <S.UploadBtn>
              <S.Test />
            </S.UploadBtn>
            <S.ProfileUpload />
          </S.ProfileContainer>
          <S.LoginForm>
            <S.Label>아이디</S.Label>
            <S.UserIdInput />
            <S.Label>닉네임</S.Label>
            <S.UserNicknameInput />
            <S.FormSubmit>Start Now</S.FormSubmit>
          </S.LoginForm>
        </S.LoginWrap>
      </S.Login>
    </>
  );
}
