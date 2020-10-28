import React from 'react'

import * as S from './styled'

const Selected = (props) => {
  return(
    <S.Selected id={props.id} size={props.size}>
      {props.children}
    </S.Selected>  
  )
}

export default Selected;