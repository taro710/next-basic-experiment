import { Dispatch, SetStateAction } from 'react';
import style from './Modal.module.scss';

type Props = {
  stateSetter: Dispatch<SetStateAction<boolean>>; // 親コンポーネントのstate(boolean)を変更できる
};

const Modal: React.VFC<Props> = ({ stateSetter }) => {
  return (
    <div className={`${style['modal-panel']}`}>
      <p className={`${style['text']}`}>ボタンを押して閉じる</p>
      <button
        className={`${style['close-button']}`}
        onClick={() => {
          stateSetter(false);
        }}
      >
        close
      </button>
    </div>
  );
};

export default Modal;
