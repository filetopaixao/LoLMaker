import React from 'react'

import * as S from './styled'

const ButtonsRow = (props) => {
  return(
    <S.ButtonsRow id={props.id}>
      {props.children}
    </S.ButtonsRow>  
  )
}

export default ButtonsRow;