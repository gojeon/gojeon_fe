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
    const [data, setData] = useState<Quote[]>([]);
    const [param, setParam] = useState({ text: '' });
    const [editing, setEditing] = useState<{ id: number | null; text: string }>({ id: null, text: '' });

    useEffect(() => {
        fetch('http://localhost:4001/api/data')
            .then((response) => response.json())
            .then((data: Quote[]) => setData(data)) // 응답 데이터를 Quote 타입으로 처리
            .catch((err) => console.error(err)); // 에러 처리 추가
    }, []);

    const onChangeParam = (e: { target: { value: any } }) => {
        setParam((prev) => ({ ...prev, text: e.target.value }));
    };

    const onClickWrite = () => {
        fetch('http://localhost:4001/api/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: param.text }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('명언 추가 실패');
                }
                return response.json();
            })
            .then(() => {
                fetch('http://localhost:4001/api/data')
                    .then((response) => response.json())
                    .then((data: Quote[]) => setData(data))
                    .catch((err) => console.error(err));
                setParam({ text: '' });
            })
            .catch((err) => console.error(err));
    };

    const onClickDelete = (id: number) => {
        fetch(`http://localhost:4001/api/list/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('명언 삭제 실패');
                }
                // 성공적으로 삭제된 후 데이터 새로고침
                setData((prev) => prev.filter((item) => item.id !== id));
            })
            .catch((err) => console.error(err));
    };

    const onClickEdit = (item: Quote) => {
        setEditing({ id: item.id, text: item.text });
    };

    const onChangeEditText = (e: { target: { value: string } }) => {
        setEditing((prev) => ({ ...prev, text: e.target.value }));
    };

    const onClickUpdate = () => {
        if (editing.id) {
            fetch(`http://localhost:4001/api/list/${editing.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: editing.text }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('명언 수정 실패');
                    }
                    return response.json();
                })
                .then(() => {
                    setData((prev) =>
                        prev.map((item) => (item.id === editing.id ? { ...item, text: editing.text } : item))
                    );
                    setEditing({ id: null, text: '' });
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <MantineProvider>
            <div css={backgroundWrapperStyle}>
                <Center style={{ minHeight: '100vh' }}>
                    <h1 style={{ textAlign: 'center' }}>명언 한 줄</h1>
                    {data.length > 0 &&
                        data.map((item, idx) => (
                            <div key={item.id}>
                                {editing.id === item.id ? (
                                    <>
                                        <textarea value={editing.text} onChange={onChangeEditText} />
                                        <button onClick={onClickUpdate}>명언 수정</button>
                                    </>
                                ) : (
                                    <>
                                        <span>{idx + 1}</span>
                                        <span>{item.text}</span>
                                        <button onClick={() => onClickEdit(item)}>수정</button>
                                        <button onClick={() => onClickDelete(item.id)}>x</button>
                                    </>
                                )}
                            </div>
                        ))}
                </Center>
                <div>
                    <textarea onChange={onChangeParam} value={param.text} />
                    <button onClick={onClickWrite}>명언쓰기</button>
                </div>
            </div>
        </MantineProvider>
    );
}

export default App;
