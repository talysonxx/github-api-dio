import {Fragment} from 'react'
import {Layout, Profile, ResetCSS, Respositories, GithubProvider, useGithub, NoSearch} from './components'

export default function GitHubApp() {
  const {githubState} = useGithub()

  return (
    <main>
      <GithubProvider>
        <ResetCSS/>
        
        <Layout>
          {/* {githubState.hasUser ? (
            <Fragment>
              {githubState.loading ? (
                <p>Loading</p>
              ) : (
                <Fragment>
                  <Profile/>
                  <Respositories/>
                </Fragment>
              )}
            </Fragment>
          ) : (
            <NoSearch/>
          )} */}
          <Profile/>
          <Respositories/>
        </Layout>
      </GithubProvider>
    </main>
  )
}
