import { Space } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import IntroImg from '../../assets/img/login_intro_1.png';
import Button from '../../common/Button';
import LabeledInput from '../../common/LabeledInput';
import Logo from '../../common/Logo';
import useLogin from './Login.hooks';
import * as Styles from './Login.styles';
/* @jsxImportSource @emotion/react */

const Login = () => {
    const navigate = useNavigate();
    const onClickSignUp = () => {
        navigate('/sign');
    };
    const app = useLogin();
    return (
        <div css={Styles.Container}>
            <div css={Styles.Intro}>
                <div css={Styles.MentContainer}>
                    <div css={Styles.FirstMent}>
                        <Logo text={'문터'} />
                        <span>에서</span>
                    </div>
                    <div>
                        문장으로 <span style={{ color: '#6D673A' }}>놀자</span>
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
                    value={app.param.email}
                    onChange={(e) => {
                        app.onChangeParam(e, 'email');
                    }}
                />
                <Space h="sm" />
                <LabeledInput
                    labelText="비밀번호"
                    placeholder="비밀번호를 입력해주세요."
                    type="password"
                    value={app.param.password}
                    onChange={(e) => {
                        app.onChangeParam(e, 'password');
                    }}
                />
                <Space h="md" />
                <Button text="로그인하기" onClick={app.onClickLogin} />
                <Space h="sm" />
                <Button text="회원가입하기" color="#6D673A" onClick={onClickSignUp} />
            </div>
        </div>
    );
};

export default Login;
