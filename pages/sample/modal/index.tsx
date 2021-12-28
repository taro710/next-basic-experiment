import { useState } from 'react';
import Modal from '../../../components/Modal/Modal';
import style from './index.module.scss';

const ModalSample = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <>
      <div className={`${style['button-wrapper']}`}>
        <button
          className={`${style['button']}`}
          onClick={() => {
            setIsOpened(true);
          }}
        >
          open
        </button>
      </div>

      <div className={`${style['modal-wrapper']} ${style[`-open${isOpened}`]}`}>
        <Modal stateSetter={setIsOpened} />
      </div>
    </>
  );
};

export default ModalSample;
