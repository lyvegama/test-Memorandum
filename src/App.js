import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './components/Footer';
import Nav from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Router />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;