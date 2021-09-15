import {useContext} from 'react'
import { GithubContext } from '..'

export const useGithub = () => {
  const {githubState} = useContext(GithubContext)

  return {githubState}
}