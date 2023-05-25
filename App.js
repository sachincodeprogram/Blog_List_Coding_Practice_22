import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App





* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
}

.responsive-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 4px solid #551e53;
  border-radius: 12px;
}

@media (max-width: 576px) {
  .responsive-container {
    width: 85%;
  }
}

.app-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
