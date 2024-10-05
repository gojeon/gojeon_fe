import { css } from '@emotion/react';
import { Center, MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';

// 타입 정의
interface Quote {
    id: number;
    text: string;
}

// 스타일링 컴포넌트 정의
const backgroundWrapperStyle = css`
    background-color: lightgray;
    min-height: 100vh;
`;

function App() {
    const [data, setData] = useState<Quote[]>([]); // 타입 지정: Quote 배열

    useEffect(() => {
        fetch('http://localhost:4001/api/data')
            .then((response) => response.json())
            .then((data: Quote[]) => setData(data)) // 응답 데이터를 Quote 타입으로 처리
            .catch((err) => console.error(err)); // 에러 처리 추가
    }, []);

    return (
        <MantineProvider>
            <div css={backgroundWrapperStyle}>
                <Center style={{ minHeight: '100vh' }}>
                    <h1 style={{ textAlign: 'center' }}>명언 한 줄</h1>
                    {data.length > 0 &&
                        data.map((item, idx) => (
                            <div key={item.id}>
                                <span>{idx + 1}</span>
                                <span>{item.text}</span>
                            </div>
                        ))}
                </Center>
            </div>
        </MantineProvider>
    );
}

export default App;
