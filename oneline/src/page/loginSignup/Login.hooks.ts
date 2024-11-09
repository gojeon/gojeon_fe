import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const navigate = useNavigate();
    const [param, setParam] = useState({
        email: '',
        password: '',
    });

    const onChangeParam = (e: any, key: string) => {
        const { value } = e.target;
        switch (key) {
            case 'email':
                setParam((prev) => ({ ...prev, email: value }));
                break;
            case 'password':
                setParam((prev) => ({ ...prev, password: value }));
                break;
        }
    };

    const onClickLogin = () => {
        fetch('http://localhost:4001/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(param),
        })
            .then((response) => response.json())
            .then((data) => {
                setParam({ email: '', password: '' });
            })
            .catch((error) => {
                console.error('에러:', error);
            });
    };

    return {
        param,
        onChangeParam,
        onClickLogin,
    };
};

export default useLogin;
