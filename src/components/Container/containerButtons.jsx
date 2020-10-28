import React from 'react'

import * as S from './styled'

const ContainerButtons = (props) => {
  return(
    <S.ContainerButtons>
      {props.children}
    </S.ContainerButtons>  
  )
}

export default ContainerButtons;