import { BrowserRouter as  Link } from 'react-router-dom';

import ShipList from './components/ShipList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG23.png" alt="Star Wars Logo" />

      <nav>
            <Link to="/">Home</Link>
            <Link to="/starships" className="starships-link"> Starships</Link>
          </nav>

      <div className="login-signup">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
      </header>
      <main>
        <ShipList />
      </main>
    </div>
  );
}

export default App;
