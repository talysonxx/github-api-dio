import React, {useEffect, useState, Fragment} from 'react'
import * as S from './styled'
import {RepositoryItem} from '../repository-item'
import {useGithub} from '..'

export const Respositories = () => {
  const {githubState, getUserRepos, getUserStarred} = useGithub()
  const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false)

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login)
      getUserStarred(githubState.user.login)
    }
    sethasUserForSearchRepos(!!githubState.repositories)
  }, [githubState.user.login])


  return (
    <Fragment>
      {hasUserForSearchRepos ?
      (<S.WrapperTabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'>
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>

          <S.WrapperTabPanel>
            <S.WrapperList>
            {githubState.repositories.map(item => (
              <RepositoryItem
              key={item.id}
              name={item.name}
              fullname={item.full_name}
              linkToRepo={item.owner.html_url}/>
            ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          
          <S.WrapperTabPanel>
            <S.WrapperList>
            {githubState.starred.map(item => (
              <RepositoryItem
              key={item.id}
              name={item.name}
              fullname={item.full_name}
              linkToRepo={item.owner.html_url}/>
            ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
      </S.WrapperTabs>)
      : <Fragment></Fragment>}
    </Fragment>
  )
}
