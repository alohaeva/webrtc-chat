import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';

import styles from './Backdrop.module.scss';
import { BackdropProps } from './Backdrop.types';

const Backdrop = ({ animate }: BackdropProps) => {
  if (animate) {
    return (
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={styles.root} />
      </Transition.Child>
    );
  }

  return <div className={styles.root} />;
};

export default Backdrop;
