import React from 'react'
import * as S from './styled'

export const RepositoryItem = ({name, fullname, linkToRepo}) => {
  return (
    <S.Wrapper>
      <h2>Nome:</h2>
      <span>{name}</span>
      <h3>Nome completo:</h3>
      <a
      href={`${linkToRepo}/${name}`}
      target='_blank'
      rel="noreferrer" >
        {fullname}
      </a>
    </S.Wrapper>
  )
}
