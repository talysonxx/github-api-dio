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
      id: undefined,
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
    getUser: useCallback(userName => getUser(userName), []),
    getUserRepos: useCallback(userName => getUserRepos(userName), []),
    getUserStarred: useCallback(userName => getUserStarred(userName), []),
  }

  function  getUser(userName) {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading
    }))

    api.get(`/users/${userName}`)
      .then(({data}) => {
        // console.log(data)
        setGithubState(prevState => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,  
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
    ).finally(() => {
      setGithubState(prevState => ({
        ...prevState,
        loading: !prevState.loading
      })) 
    })
  }

  function  getUserRepos(userName) {
    api.get(`/users/${userName}/repos`)
      .then(({data}) => {
        console.log(data)
        setGithubState(prevState => ({
          ...prevState,
          repositories: data
        }))
      }
    )
  }

  function  getUserStarred(userName) {
    api.get(`/users/${userName}/starred`)
      .then(({data}) => {
        console.log(data)
        setGithubState(prevState => ({
          ...prevState,
          starred: data
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
