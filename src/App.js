import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router'
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