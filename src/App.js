import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Start    from './components/Start.js';
import Google   from './components/Google.js';
import Facebook from './components/Facebook.js';


function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <h1 className='App-title'>
            CompLit
          </h1>
        </header>
        <div className='App-body'>
          <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/google' element={<Google />} />
            <Route path='/facebook' element={<Facebook />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
