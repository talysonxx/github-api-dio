import App from './App'
import {ResetCSS, GithubProvider} from './components'

export const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS/>
        <App/>
      </GithubProvider>
    </main>
  )
}