import {Layout, Profile, ResetCSS, Respositories, GithubProvider} from './components'

function GitHubApp() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS/>
        
        <Layout>
          <Profile/>

          <Respositories/>
        </Layout>
      </GithubProvider>
    </main>
  )
}

export default GitHubApp
