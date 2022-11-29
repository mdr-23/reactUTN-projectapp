import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AuthProvider from './Context/AuthContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <NavBar />
          <Public />
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
