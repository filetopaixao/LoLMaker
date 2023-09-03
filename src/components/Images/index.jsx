import React from 'react'

import * as S from './styled'

const Images = (props) => {

  return(
    <S.Images {...props} src={props.src} onClick={(e) => props.onClick(e)} />
  )
}

export default Images;