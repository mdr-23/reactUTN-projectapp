import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Public />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
