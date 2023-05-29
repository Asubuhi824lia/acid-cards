import './App.css';

import Header from './components/Header/Header'
import Main   from './components/Main/Main'

function App(props) {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main acidElems={props.state.acid_elems} />
      </div>
    </div>
  );
}

export default App;
