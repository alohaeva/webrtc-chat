import { ForwardedRef, forwardRef, memo } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

import { InputProps } from './Input.types';

const Input = memo(
    forwardRef(
        (
            { id, fullWidth, label, onChange, onBlur, name }: InputProps,
            ref: ForwardedRef<HTMLInputElement>
        ) => {
            return (
                <div
                    className={clsx(styles.inputWrapper, {
                        [styles.fullWidth]: fullWidth,
                    })}
                >
                    <label className={styles.label} htmlFor={name}>
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
    )
);

export default Input;
