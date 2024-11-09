import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignUp = () => {
    const navigate = useNavigate();
    const [param, setParam] = useState({
        email: '',
        nickName: '',
        password: '',
        confirmPW: '',
    });
    const [validation, setValidation] = useState({
        email: '',
        nickName: '',
        password: '',
        confirmPW: '',
    });

    const onChangeParam = (e: any, key: string) => {
        const { value } = e.target;
        switch (key) {
            case 'email':
                setParam((prev) => ({ ...prev, email: value }));
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && emailRegex.test(value)) {
                    setValidation((prev) => ({ ...prev, email: 'good' }));
                } else {
                    setValidation((prev) => ({ ...prev, email: 'bad' }));
                }
                break;
            case 'nickName':
                const trimmedNickName = value.slice(0, 8);
                setParam((prev) => ({ ...prev, nickName: trimmedNickName }));
                if (trimmedNickName) {
                    setValidation((prev) => ({ ...prev, nickName: 'good' }));
                } else {
                    setValidation((prev) => ({ ...prev, nickName: 'bad' }));
                }
                break;
            case 'password':
                const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
                setParam((prev) => ({ ...prev, password: value }));
                if (value && pwRegex.test(value)) {
                    setValidation((prev) => ({ ...prev, password: 'good' }));
                } else {
                    setValidation((prev) => ({ ...prev, password: 'bad' }));
                }
                break;
            case 'confirmPW':
                setParam((prev) => ({ ...prev, confirmPW: value }));
                if (value && value === param.password) {
                    setValidation((prev) => ({ ...prev, confirmPW: 'good' }));
                } else {
                    setValidation((prev) => ({ ...prev, confirmPW: 'bad' }));
                }
                break;
        }
    };

    const onClickHome = () => {
        navigate('/');
    };

    const onClickSignUp = () => {
        const { confirmPW, ...newParam } = param;
        fetch('http://localhost:4001/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newParam),
        })
            .then((response) => response.json())
            .then((data) => {
                onClickHome();
                setParam({
                    email: '',
                    nickName: '',
                    password: '',
                    confirmPW: '',
                });
            })
            .catch((error) => {
                console.error('에러:', error);
            });
    };

    return {
        param,
        validation,
        onClickSignUp,
        onChangeParam,
        onClickHome,
    };
};

export default useSignUp;
