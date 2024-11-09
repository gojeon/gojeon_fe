import { MantineProvider } from '@mantine/core';
import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import List from './page/list/List';
import SignUp from './page/loginSignup/SignUp';
import GlobalStyles from './page/styles/GlobalStyles';

const Login = lazy(() => import('./page/loginSignup/Login'));

const App = () => {
    return (
        <MantineProvider
            theme={{
                spacing: {
                    xs: '4px',
                    sm: '8px',
                    md: '16px',
                    lg: '24px',
                    xl: '32px',
                },
            }}
        >
            <div className="app-background">
                <div className="content-container">
                    <Router>
                        <Suspense fallback={<div>잠시만 기다려주세요...</div>}>
                            <GlobalStyles />
                            <Routes>
                                <Route path="/list" element={<List />} />
                                <Route path="/" element={<Login />} />
                                <Route path="/sign" element={<SignUp />} />
                            </Routes>
                        </Suspense>
                    </Router>
                </div>
            </div>
        </MantineProvider>
    );
};

export default App;
