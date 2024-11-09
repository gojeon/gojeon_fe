import { css } from '@emotion/react';
import { forwardRef } from 'react';
/* @jsxImportSource @emotion/react */

export const Wrap = () => css`
    width: 100%;
    box-sizing: border-box;
`;
export const Label = () => css`
    font-size: 14px;
    color: #9d9d9d;
`;

export const Input = (error?: boolean) => css`
    font-size: 16px;
    border-color: ${error ? '#F45151' : 'black'} !important;
    border-radius: 8px;
    border: 1px solid;
    width: 100%;
    height: 35px;
    padding: 4px 4px 4px 12px;
    &:focus {
        border-color: ${error ? '#F45151' : '#3f3911'} !important;
        outline: none;
        border: 1.5px solid;
    }
    &::placeholder {
        font-size: 14px;
        font-style: italic;
    }
`;

interface ILabelInputProps {
    labelText: string;
    placeholder?: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    error?: boolean;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    errorMsg?: string;
}

const LabeledInput = forwardRef<HTMLInputElement, ILabelInputProps>(
    ({ labelText, placeholder, value, onChange, onBlur, type = 'text', error, errorMsg }: ILabelInputProps, ref) => {
        return (
            <div css={Wrap()}>
                <div css={Label}>{labelText}</div>
                <input
                    ref={ref}
                    type={type}
                    css={Input(error)}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {error && <p style={{ color: '#F45151', fontSize: '12px', padding: '0', margin: '0' }}>{errorMsg}</p>}
            </div>
        );
    }
);

export default LabeledInput;
