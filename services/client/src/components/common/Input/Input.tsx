import {
    forwardRef,
    ForwardRefRenderFunction,
    memo
} from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    props,
    ref
) => {
    const { name, id, fullWidth, onBlur, onChange, label } = props;

    return (
        <div
            className={clsx(styles.inputWrapper, {
                [styles.fullWidth]: fullWidth,
            })}
        >
            <label
                className={styles.label}
                htmlFor={name}
            >
                {label}
            </label>
            <div className={styles.inputRoot}>
                <input
                    type="text"
                    ref={ref}
                    id={id}
                    name={name}
                    className={styles.input}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
        </div>
    );
}

const Input = forwardRef(InputComponent);

// @ts-ignore
export default memo(Input);
