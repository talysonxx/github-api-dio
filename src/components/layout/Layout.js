import React from 'react'
import * as S from './styled'
import {Header} from '..'

export const Layout = ({children}) => {

  return (
    <S.WrapperLayout>
      <Header/>
      {/* {githubState.loading ? <p>loading</p> : <>{children}</>} */}
      {children}
    </S.WrapperLayout>
  )
}
