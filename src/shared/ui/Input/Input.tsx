import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    placeholder?: string,
    autoFocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const {
        className, value, onChange, type = 'text', placeholder, autoFocus, ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autoFocus]);
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {placeholder}
                </div>
            )}
            <input
                ref={ref}
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
