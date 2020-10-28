import React from 'react'

import * as S from './styled'

const Button = (props) => {
  return(
    <S.Button id={props.id} size={props.size} generate={props.generate} onClick={() => props.onClick()}>
      {props.children}
    </S.Button>  
  )
}

export default Button;