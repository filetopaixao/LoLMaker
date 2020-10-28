import React from 'react';

import * as S from './styled';

const Modal = (props) => {
  const handleOutSideClick = (e) => {
    if (e.target.id === props.id) props.onClose();
  };

  return (
    <>
      {props.isVisible ? (
        <S.Modal id={props.id} onClick={handleOutSideClick} alignCenter={props.alignCenter}>
          <S.ModalContent variant={props.variant}>
            {props.btnCloser ? (
              <S.ButtonCloserModal>
                <S.ButtonClose className="btnMdCloser" type="button" onClick={() => props.onClose()}>
                  Close X
                </S.ButtonClose>
              </S.ButtonCloserModal>
            ) : null}
            {props.title ? (
              <S.ModalHeader>
                <h3>{props.title}</h3>
                {props.children}
              </S.ModalHeader>
            ) : null}
            <S.ModalBody>{props.children}</S.ModalBody>
          </S.ModalContent>
        </S.Modal>
      ) : null}
    </>
  );
};

export default Modal;
