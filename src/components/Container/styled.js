import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  #adsense{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    margin: 0 10px 0 10px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  text-align: center;
  h2{
    color: #fff;
  }
  h3{
    color: #bbb263;
    font-size: 15px;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
      display:flex;
      flex-direction: row;
    }
  }
`;