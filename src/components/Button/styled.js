import styled, { css } from 'styled-components';

const size = {
  champion: () => css`
    width: 150px;
    height: 150px;
  `,
  abilities: () => css`
    width: 100px;
    height: 100px;
  `,
  passive: () => css`
    width: 80px;
    height: 80px;
  `,
  key: () => css`
    width: 30%;
  `,
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => size[props.size]}

  margin: 10px;

  border: 3px solid #bbb263;
  border-radius: 3px;

  ${(props) => props.generate ? 'background-color: #bbb263; color:#1f2328; padding: 20px;' :'background-color: #1f2328; color: #bbb263;'}
  cursor: pointer;
  font-size: 15px;
`;