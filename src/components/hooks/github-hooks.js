import {useContext} from 'react'
import {GithubContext} from '..'

export const useGithub = () => {
  const {githubState, getUser} = useContext(GithubContext)

  return {githubState, getUser}
}