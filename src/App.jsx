import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; import ShipList from './components/ShipList';
import './App.css';
import ShipDetail from './components/ShipDetail';
import { ShipProvider } from './ShipContext';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';

//for social icons import all the images form the folder

import tiktokIcon from './social/tic.png';
import twitterIcon from './social/twitter1.png';
import instagramIcon from './social/inst.png';
import facebookIcon from './social/fb.png';
import whatsappIcon from './social/whtsup.png';
import youtubeIcon from './social/you-tube.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG23.png" alt="Star Wars Logo" />

          <nav>
            <Link to="/">Home</Link>
            <Link to="/starships" className="starships-link"> Starships</Link>
          </nav>

          <div className="social-media">
            <a href='https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des' target="_blank">
              <img src={tiktokIcon} alt="TikTok" />
            </a>
            <a href='https://x.com/' target="_blank">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href='https://www.instagram.com/' target="_blank">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href='https://www.facebook.com/?locale=es_ES/' target="_blank">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href='https://www.whatsapp.com/?lang=es_LA' target="_blank">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
            <a href='https://www.youtube.com/' target="_blank">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>

          <div className="login-signup">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </header>
        <main>
          <ShipProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/starships" element={<ShipList />} />
              <Route path="/starships/:shipId" element={<ShipDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </ShipProvider>
        </main>
      </div>
    </Router>
  );
}

export default App;
