import React, {createContext, useState} from 'react'

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: []
})

export const GithubProvider = ({children}) => {
  const initState = {
    user: {
      login: undefined,
      name: undefined,
      url: undefined,
      html_url: undefined,
      // company: undefined,
      // blog: undefined,
      // location: undefined,
      // email: undefined,
      // bio: undefined,
      // twitter: undefined,
      avatar_url: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0
    },
    repositories: [],
    starred: []
  }

  const [githubState, setGithubState] = useState(initState)

  const contextValue = {
    githubState
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}
