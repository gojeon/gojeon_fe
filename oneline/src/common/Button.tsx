import { css } from '@emotion/react';
/* @jsxImportSource @emotion/react */

export const ButtonStyle = (color?: string) => css`
    font-size: 16px;
    background-color: ${color ? color : '#3f3911'} !important;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    color: white;
    border-color: transparent;
`;

interface ILabelInputProps {
    text: string;
    color?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ILabelInputProps) => {
    return (
        <button css={ButtonStyle(props.color)} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Button;
