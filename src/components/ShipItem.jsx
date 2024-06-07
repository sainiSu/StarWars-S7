import '../styles/ShipItem.css';
import { Link } from 'react-router-dom';

const ShipItem = ({ name, model, url }) => {
  if (!url) {
    return null;
  }

  const shipId = url.split('/').filter(Boolean).pop();

  return (
    <div className="ship-item">
      <Link to={`/starships/${shipId}`}>
        <h2>{name}</h2>
        <p>{model}</p>
        </Link>
    </div>
  );
};

export default ShipItem;
