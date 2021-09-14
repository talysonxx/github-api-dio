import React from 'react'
import * as S from './styled'

export const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage src='https://avatars.githubusercontent.com/u/79946114?v=4' alt='Avatar do usuário'/>

      <S.WrapperInfoUser>
        <div>
          <h1>Nome</h1>
          <S.WrapperUserName>
            <h3>User</h3>
            <span>taysonxx</span>
          </S.WrapperUserName>
        </div>

        <S.WrapperStatusCount>
          <div>
            <h4>Seguidores</h4>
            <span>0</span>
          </div>

          <div>
            <h4>Starreds</h4>
            <span>3</span>
          </div>

          <div>
            <h4>Seguindo</h4>
            <span>8</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}
