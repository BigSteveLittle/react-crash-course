<<<<<<< HEAD
import Header from "./components/Header"

function App() {
    return (
        <div className="container">
            <Header/>
        </div>
    )
}

export default App

// AS A CLASS.
// import React from "react"

// class App extends React.Component {
//     render() {
//         return <h1>Hello From a Class</h1>
//     }
// }

// export default App
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
>>>>>>> ed684d9 (Initialize project using Create React App)
