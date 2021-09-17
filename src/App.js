import {Fragment} from 'react'
import {Layout, Profile, Respositories, useGithub, NoSearch} from './components'

export default function GitHubApp() {
  const {githubState} = useGithub()

  return (
    <Layout>
      <Fragment>
        {githubState.hasUser ? <Fragment>
          {githubState.loading
            ? (
                <p>Carregando</p> 
            ) : (
                <>
                  <Profile/>
                  <Respositories/>
                </>
              )
          }
        </Fragment> : <NoSearch/>}
      </Fragment>
    </Layout>
  )
}
