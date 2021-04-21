import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ConstantActions } from '../../interfaces/constant.interface';

const Toast = ({
  title,
  message,
  bgColor,
}: {
  title: string;
  message: string;
  bgColor: string;
}): JSX.Element => {
  let timer: NodeJS.Timeout;
  const dispatch = useDispatch();
  const handleShow = () => {
    dispatch<ConstantActions>({ type: 'ALERT', payload: {} });
    clearTimeout(timer);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(
      () => dispatch<ConstantActions>({ type: 'ALERT', payload: {} }),
      15000
    );
  }, [dispatch, setTimeout]);

  return (
    <div
      className={`toast show position-fixed text-light ${bgColor}`}
      style={{ top: '5px', right: '5px', minWidth: '150px', zIndex: 50 }}
    >
      <div className={`toast-header text-light ${bgColor}`}>
        <strong className="me-auto text-light">{title}</strong>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="toast"
          style={{ outline: 'none' }}
          onClick={handleShow}
        >
          &#8289;
        </button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
};

export default Toast;
