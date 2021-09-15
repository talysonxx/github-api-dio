import React, {createContext, useState, useCallback} from 'react'
import {api} from '../services'

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: []
})

export const GithubProvider = ({children}) => {
  const initState = {
    hasUser: false,
    loading: false,
    user: {
      login: undefined,
      name: undefined,
      url: undefined,
      html_url: undefined,
      avatar_url: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
      twitter_username: undefined
      // company: undefined,
      // blog: undefined,
      // location: undefined,
      // email: undefined,
      // bio: undefined,
    },
    repositories: [],
    starred: []
  }

  const [githubState, setGithubState] = useState(initState)

  const contextValue = {
    githubState,
    getUser: useCallback(userName => getUser(userName), [])
  }

  function  getUser(userName) {
    api.get(`/users/${userName}`)
      .then(({data}) => {
        // console.log(data)
        setGithubState(prevState => ({
          ...prevState,
          user: {
            login: data.login,
            name: data.name,
            url: data.url,
            html_url: data.html_url,
            avatar_url: data.avatar_url,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
            twitter_username: data.twitter_username,
            bio: data.bio,
            location: data.location,
            // company: data.company,
            // blog: data.blog,
            // email: data.email,
          }
        }))
      }
    )
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}
