import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
// eslint-disable-next-line react/prop-types
const Modal = forwardRef(function Modal({ children, className, onClose }, ref) {
  const dialog = useRef({ children });

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close: () => {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  return createPortal(
    <dialog ref={dialog} className={className} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
