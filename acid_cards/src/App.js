import './App.css';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Article from './components/Article/Article'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className='main'>
          <Navbar  />
          <Article />
        </main>
      </div>
    </div>
  );
}

export default App;
