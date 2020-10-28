import styled, { css } from 'styled-components';

const variants = {
  lg: () => css`
    width: 85%;
  `,
  md: () => css`
    width: 50%;
  `,
  sm: () => css`
    width: 30%;
  `,
};

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  ${(props) => props.alignCenter && 'align-items: center;'}

  width: 100%;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 999;

  box-shadow: 0 3px 26px rgba(0, 0, 0, 0.3);
  background: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  display: inline-table;

  ${(props) => variants[props.variant]}
  height: auto;

  margin: 20px 0 20px 0;
  ${(props) => (props.type === 'changePass' ? 'padding: 0;' : 'padding: 15px 50px;')}

  border-radius: 20px;
  z-index: 2;
  background-color: #1f2328;
  color: #bbb263;

  overflow: hidden;

  span {
    margin-left: 10px;
  }

  @media (max-width: 500px) {
    width: 90%;
    padding: 15px 15px;
  }

  @media (min-width: 992px) {
    ${(props) =>
      props.type === 'changePass' ? 'display: flex; flex-direction: row; height: 450px; padding: 0;' : null}
  }
`;

export const ModalBody = styled.div`
  ${(props) => (props.center ? 'text-align: center;' : '')}

  height: auto;
  margin-top: 10px;
  text-align: center;

  @media (min-width: 1400px) {
    margin: 23px 0px 40px 0px;
  }

  ${(props) => (props.type === 'changePass' ? 'width: 100%;' : '')}

  @media (max-width: 992px) {
    margin: 10px 0px 10px 0px;
  }
  #filter{
    width:100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const ModalHeader = styled.header`
  h3 {
    font-size: 14px;
    font-weight: 600;
    text-align: center;

    width: 100%;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const ButtonClose = styled.button`
  width: 100px;
  height: 10px;

  border: 0;

  color: #bbb263;
  background-color: transparent;
`;

export const ButtonCloserModal = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    font-size: 14px;

    padding: 0;

    letter-spacing: 0px;
    text-transform: none;

    opacity: 1;
    box-shadow: none;

    color: #cbcaca;
    background: transparent;

    &:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  }
`;
