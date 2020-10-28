import React from 'react'

import * as S from './styled'

const Container = (props) => {
  return(
    <S.Container>
      {props.children}
    </S.Container>  
  )
}

export default Container;