import React, { useCallback, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { Translation } from '../common/Translation';
import { ErrorMessage } from '../common/ErrorMessage';

import { EnterNameFormProps } from './EnterNameFormProps.types';

import styles from './EnterNameForm.module.scss';

const formSchema = z.object({
    name: z.string().min(1, 'name.required').max(100),
});

type FormSchemaType = z.infer<typeof formSchema>;

const EnterNameForm = ({
    onSubmit,
    onCancel,
}: EnterNameFormProps<FormSchemaType>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        criteriaMode: 'all',
        shouldFocusError: true,
        resolver: zodResolver(formSchema),
    });

    const onSubmitHandler = useCallback<SubmitHandler<FormSchemaType>>(
        data => {
            onSubmit(data);
        },
        [onSubmit]
    );

    const onSubmitForm = useCallback(handleSubmit(onSubmitHandler), [
        onSubmitHandler,
    ]);

    const inputFormProps = useMemo(() => register('name'), [register]);

    return (
        <form onSubmit={onSubmitForm} className={styles.formWrapper}>
            <div className={styles.inputWrapper}>
                <Input
                    id="name"
                    fullWidth
                    label={
                        <Translation
                            nameSpace="forms"
                            translation="enterNameForm.input"
                        />
                    }
                    {...inputFormProps}
                />
                {errors.name?.message && (
                    <ErrorMessage
                        error={
                            <Translation
                                nameSpace="forms"
                                translation={`enterNameForm.errors.${errors.name.message}`}
                            />
                        }
                    />
                )}
            </div>
            <Button
                type="submit"
                label={
                    <Translation
                        nameSpace="forms"
                        translation="enterNameForm.button"
                    />
                }
            />
        </form>
    );
};

export default EnterNameForm;
