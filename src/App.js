import './App.css';
import Animate from './component/Animate';
import Header from './component/Header';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <main id='main'>
        <Router>
          <Header />
          <Animate />

        </Router>
      </main>
    </div>
  );
}

export default App;
