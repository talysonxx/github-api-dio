import React from 'react'
import * as S from './styled'
import {Header} from '../header'

export const Layout = ({children}) => {
  return (
    <S.WrapperLayout>
      <Header/>
      {children}
    </S.WrapperLayout>
  )
}
