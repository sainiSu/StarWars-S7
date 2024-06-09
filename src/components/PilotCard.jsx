import PropTypes from 'prop-types';
import defaultImage from '../assets/image.png';
import '../styles/PilotCard.css';

const PilotCard = ({ pilot }) => {
  if (!pilot || !pilot.url) {
    return null; // Return null or a fallback UI if the pilot or pilot.url is undefined
  }

  const pilotId = pilot.url.split('/')[5];
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`;

  return (
    <div className="pilot-card">
      <img
        src={imageUrl}
        alt={pilot.name}
        onError={(e) => e.target.src = defaultImage}
        className="pilot-image"
      />
      <p>{pilot.name}</p>
    </div>
  );
};

PilotCard.propTypes = {
  pilot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default PilotCard;