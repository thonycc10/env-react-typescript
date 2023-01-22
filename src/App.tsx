import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    // npm i --save-dev dotenv
    // npm i --save-dev env-cmd
    console.log(process.env.REACT_APP_ENV);
    console.log(process.env.REACT_APP_SECRET_NAME);
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Soy enviroment - {process.env.REACT_APP_ENV}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
