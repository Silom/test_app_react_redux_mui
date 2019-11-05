import * as React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import theme from './theme'
import store from './store'

import { Layout } from './components/organism'
import { Dashboard, About } from './area'

interface AppProps {
}

class App extends React.Component<AppProps> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact><Dashboard /></Route>
            <Route path="/about"><About /></Route>
          </Switch>
        </Layout>
      </Router>
    )
  }
}

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)
