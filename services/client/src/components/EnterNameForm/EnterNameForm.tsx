import React, { useCallback, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@components/common/Input';
import { Translation } from '@components/common/Translation';
import { ErrorMessage } from '@components/common/ErrorMessage';
import { Button } from '@components/common/Button';

import { enterNameDialogFormSchema, FormSchemaType } from '../../schemas';

import styles from './EnterNameForm.module.scss';
import { EnterNameFormProps } from './EnterNameFormProps.types';

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
    // reValidateMode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: zodResolver(enterNameDialogFormSchema),
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
    <form
      onSubmit={onSubmitForm}
      className={styles.formWrapper}
    >
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
        <ErrorMessage
          isErrorVisible={Boolean(errors.name?.message)}
          error={
            <Translation
              nameSpace="forms"
              translation={`enterNameForm.errors.${errors?.name?.message}`}
            />
          }
        />
      </div>
      <div className={styles.buttonsGroup}>
        <Button
          type="submit"
          label={
            <Translation
              nameSpace="forms"
              translation="enterNameForm.button"
            />
          }
        />
        {onCancel ? (
          <Button
            onClick={onCancel}
            variant="secondary"
            label={
              <Translation
                nameSpace="common"
                translation="buttons.cancel"
              />
            }
          />
        ) : null}
      </div>
    </form>
  );
};

export default EnterNameForm;
