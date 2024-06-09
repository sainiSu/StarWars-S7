import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/ShipDetail.css'
import defaultImage from '../assets/image.png'
import defaultPilotImage from '../assets/pilott.jpg'

const ShipDetail = () => {
    const { shipId } = useParams();
    const [ship , setShip] = useState(null);

    //for more ships
    
    const [loading ,setLoading] = useState(true);
    const [error, setError] = useState(null);

    // to get the info of pilots

    const [pilots, setPilots] = useState([]);
    const [films, setFilms] = useState([]);




    useEffect(() => {
        const fetchShip = async () => {
          try {
            const response = await axios.get(`https://swapi.dev/api/starships/${shipId}/`);
            setShip(response.data);
            const pilotResponses = await Promise.all(response.data.pilots.map((url) => axios.get(url)));
            setPilots(pilotResponses.map((res) => res.data));
            setPilots(pilotResponses.map((res) => res.data));
            const filmResponses = await Promise.all(response.data.films.map((url) => axios.get(url)));
            setFilms(filmResponses.map((res) => res.data));
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };

        fetchShip();
    }, [shipId]);

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`;

      
  return (
    <div>
    <div className="ship-detail">
      <h2>{ship.name}</h2>
      <img
        src={imageUrl}
        alt={ship.name}
        onError={(e) => e.target.src = defaultImage} 
        style={{ maxWidth: '50%', height: 'auto' }}
      />
      <p>Model: {ship.model}</p>
      <p>Manufacturer: {ship.manufacturer}</p>
      <p>Cost: {ship.cost_in_credits} credits</p>
      <p>Length: {ship.length} meters</p>
      <p>Crew: {ship.crew}</p>
      <p>Passengers: {ship.passengers}</p>
      <p>Max Speed: {ship.max_atmosphering_speed}</p>
      <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
      <p>Cargo Capacity: {ship.cargo_capacity}</p>
      <p>Consumables: {ship.consumables}</p>
    </div>

    <div className="ship-pilots">
      <h2>Pilots</h2>
      <div className="pilot-list">
        {pilots.map((pilot , index) =>(
          <div key = { index } className='pilot-item'>
            
          <img src={`https://starwars-visualguide.com/assets/img/characters/${pilot.url.split('/')[5]}.jpg`} onError={(e) => e.target.src = defaultPilotImage}   style={{ maxWidth: '50%', height: 'auto' }}/>           
            <p>{pilot.name}</p>
            </div>
        ))}
      </div>
    </div>
    <div className="ship-films">
        <h2>Films</h2>
        <div className="film-list">
          {films.map((film, index) => (
            <div key={index} className="film-item">
              <img src={`https://starwars-visualguide.com/assets/img/films/${film.url.split('/')[5]}.jpg`}/>
               <p>{film.title}</p>
              <p>Episode {film.episode_id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipDetail;