import React from 'react'

import * as S from './styled'

const Card = (props) => {
  return(
    <S.Card id={props.id}>
      {props.children}
    </S.Card>  
  )
}

export default Card;