import React from 'react'
import * as S from './styled'
import {useGithub} from '../hooks'

export const Profile = () => {
  const {githubState} = useGithub()

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar_url} alt='Avatar do usuário'/>
      {/* avatarUrl */}

      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.login}</h1>
          <S.WrapperUserName>
            <h3>Nome de usuário:</h3>
            <a href={githubState.user.url} target='_blank' rel='noreferrer'>{githubState.user.name}</a>
          </S.WrapperUserName>
        </div>

        <S.WrapperStatusCount>
          <div>
            <h4>Seguidores</h4>
            <span>{githubState.user.followers}</span>
          </div>

          <div>
            <h4>Seguido</h4>
            <span>{githubState.user.following}</span>
          </div>

          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>

          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}
