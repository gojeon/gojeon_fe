import { css } from '@emotion/react';
/* @jsxImportSource @emotion/react */

export const LogoStyle = (text: string) => css`
    color: #7843e6 !important;
    position: relative !important;
    font-weight: bold;
    text-transform: uppercase !important;
    animation: glitch 1s infinite;

    ::before {
        content: '${text}';
        position: absolute;
        top: 0.05rem;
        left: -0.05rem;
        color: #ff0fff;
        z-index: -1;
    }

    ::after {
        content: '${text}';
        position: absolute;
        top: -0.05rem;
        left: -0.03rem;
        color: #00ffea;
        z-index: -2;
    }

    @keyframes glitch {
        0% {
            transform: none;
        }
        20% {
            transform: translate(-2px, 2px);
        }
        40% {
            transform: translate(2px, -2px);
        }
        60% {
            transform: translate(-2px, -2px);
        }
        80% {
            transform: translate(2px, 2px);
        }
        100% {
            transform: none;
        }
    }
`;

const Logo = ({ text }: { text: string }) => {
    return <div css={LogoStyle(text)}>{text}</div>;
};

export default Logo;
