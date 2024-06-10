import '../styles/ShipItem.css';
import { Link } from 'react-router-dom';
import '../styles/ShipItem.css';
import defaultImage from '../assets/image.png';


const ShipItem = ({ name, model, url }) => {
  const shipId = url.split('/')[5];
  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`;


  return (
    <div className="ship-item">
      <Link to={`/starships/${shipId}`}>
        <img
          src={imageUrl}
          alt={name}
          onError={(e) => (e.target.src = defaultImage)}
          className="ship-image"
        />
        <div className="ship-info">
          <p>{name}</p>
          <p>{model}</p>
        </div>
      </Link>
    </div>
  );
};

export default ShipItem;
