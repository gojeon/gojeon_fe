import { Space } from '@mantine/core';
import IntroImg from '../../assets/img/login_intro_1.png';
import Button from '../../common/Button';
import LabeledInput from '../../common/LabeledInput';
import Logo from '../../common/Logo';
import * as Styles from '../loginSignup/Login.styles';
import useSignUp from './SignUp.hooks';
/* @jsxImportSource @emotion/react */

const SignUp = () => {
    const app = useSignUp();
    return (
        <div css={Styles.Container}>
            <div css={Styles.Intro}>
                <div css={Styles.MentContainer}>
                    <div css={Styles.FirstMent}>
                        <Logo text={'문터'} />
                    </div>
                    <div>
                        <span>회원가입하기</span>
                    </div>
                </div>
                <div css={Styles.ImgBox}>
                    <img css={Styles.Img} alt="인트로이미지" src={IntroImg} />
                </div>
            </div>
            <Space h="xl" />
            <div css={Styles.LoginBox}>
                <LabeledInput
                    labelText="이메일"
                    placeholder="이메일 주소를 입력해주세요"
                    errorMsg="이메일 형식이 아닙니다"
                    value={app.param.email}
                    error={Boolean(app.validation.email === 'bad')}
                    onChange={(e) => {
                        app.onChangeParam(e, 'email');
                    }}
                />
                <Space h="sm" />
                <LabeledInput
                    labelText="닉네임"
                    placeholder="최소 2글자 이상 ~ 8글자 이하"
                    errorMsg="닉네임을 입력해주세요"
                    value={app.param.nickName}
                    error={Boolean(app.validation.nickName === 'bad')}
                    onChange={(e) => {
                        app.onChangeParam(e, 'nickName');
                    }}
                />
                <Space h="sm" />
                <LabeledInput
                    type="password"
                    labelText="비밀번호"
                    placeholder="영문, 숫자, 특수문자를 포함한 6자리 이상"
                    errorMsg="영문, 숫자, 특수문자를 포함한 6자리 이상을 입력하세요"
                    value={app.param.password}
                    error={Boolean(app.validation.password === 'bad')}
                    onChange={(e) => {
                        app.onChangeParam(e, 'password');
                    }}
                />
                <Space h="sm" />
                <LabeledInput
                    type="password"
                    labelText="비밀번호 확인"
                    placeholder="상기 비밀번호를 재입력해주세요"
                    errorMsg="동일한 비밀번호가 아닙니다"
                    value={app.param.confirmPW}
                    error={Boolean(app.validation.confirmPW === 'bad')}
                    onChange={(e) => {
                        app.onChangeParam(e, 'confirmPW');
                    }}
                />
                <Space h="md" />
                <Button text="회원가입하기" onClick={app.onClickSignUp} />
                <Space h="sm" />
                <Button text="메인페이지로" color="#6D673A" onClick={app.onClickHome} />
                <Space h="md" />
                <div style={{ color: '#9D9D9D' }}>
                    {' '}
                    회원가입 시 <span style={{ fontWeight: '500' }}>서비스 이용 약관</span>과{' '}
                    <span style={{ fontWeight: '500' }}>개인정보 보호정책</span>에 동의하게 됩니다.
                </div>
            </div>
        </div>
    );
};

export default SignUp;
