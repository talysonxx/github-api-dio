import React, {useEffect} from 'react'
import * as S from './styled'
import {useGithub} from '../hooks'

export const Profile = () => {
  const {githubState} = useGithub()
  const {user} = githubState

  useEffect(() => {
    console.log(githubState.user)
  }, [githubState.user])

  return (
    <S.Wrapper>
      <S.WrapperImage src={user.avatar_url} alt='Avatar do usuário'/>

      <S.WrapperInfoUser>
        <div>
          <h1>{user.name}</h1>
          <S.WrapperUserName>
            <h3>Nome de usuário:</h3>
            <a href={user.html_url} target='_blank' rel='noreferrer'>{user.login}</a>
          </S.WrapperUserName>

          <S.WrapperUserName>
            <h3>Twitter:</h3>
            <a href={`https://twitter.com/${user.login}`} target='_blank' rel='noreferrer'> {user.twitter_username ? user.twitter_username : user.name}</a>
          </S.WrapperUserName>

          <S.WrapperUserName>
            <h3>Bio:</h3>
            <span> {user.bio}</span>
          </S.WrapperUserName>

          <S.WrapperUserName>
            <h3>Localização:</h3>
            <span> {user.location}</span>
          </S.WrapperUserName>
        </div>

        <S.WrapperStatusCount>
          <div>
            <h4>Seguidores</h4>
            <span>{user.followers}</span>
          </div>

          <div>
            <h4>Seguindo</h4>
            <span>{user.following}</span>
          </div>

          <div>
            <h4>Gists</h4>
            <span>{user.public_gists}</span>
          </div>

          <div>
            <h4>Repos</h4>
            <span>{user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}
