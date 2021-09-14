import {Layout, Profile, ResetCSS, Respositories} from './components'

function GitHubApp() {
  return (
    <main>
      <ResetCSS/>
      
      <Layout>
        <Profile/>

        <Respositories/>
      </Layout>
    </main>
  )
}

export default GitHubApp
