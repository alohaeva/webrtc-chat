import React, { Fragment, memo } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { Backdrop } from '@components/common/Backdrop';

import { ModalProps } from './Modal.types';
import styles from './Modal.module.scss';

const Modal = memo(({ open, onClose, title, body, buttons }: ModalProps) => {
  return (
    <Transition
      appear
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className={styles.dialog}
        onClose={onClose}
      >
        <Backdrop animate />

        <div className={styles.root}>
          <div className={styles.contentWrapper}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={styles.content}>
                <Dialog.Title
                  as="h3"
                  className={styles.title}
                >
                  {title}
                </Dialog.Title>
                <div className={styles.body}>{body}</div>
                <div className={styles.buttonsGroup}>{buttons}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

export default Modal;
