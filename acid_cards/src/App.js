import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Article from './components/Article/Article'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className='main'>
          <Navbar  />
          <Article />
        </main>
      </div>
    </div>
  );
}

export default App;
