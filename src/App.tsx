import viteLogo from './assets/vite.svg'
import reactLogo from './assets/react.svg'
import sassLogo from './assets/sass.svg'
import githubLogo from './assets/github.svg'
import './App.scss'

function App() {
  return (
    <div className="App">

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://sass-lang.com" target="_blank">
          <img src={sassLogo} className="logo sass" alt="Sass logo" />
        </a>
      </div>

      <h2>Vite + React + Sass</h2>
      <p className="read-the-docs">
        Click on the logos to learn more about each too
      </p>

      <div className="card">
        <p>Me</p>
      </div>

    </div>
  )
}

export default App
