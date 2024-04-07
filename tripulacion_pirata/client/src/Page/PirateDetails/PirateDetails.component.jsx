import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './PirateDetails.css';

const Details = () => {
  const [pirate, setPirate] = useState({});//Guarda los datos del pirata
  const [loading, setLoading] = useState(true);//Guarda el estado de carga
  const [error, setError] = useState(null);//Guarda el mensaje de error
  const { id } = useParams(); // Obtiene el id del pirata de la URL

  useEffect(() => {
    const getPirateDetails = async () => {
      try {
        // Obtiene los datos del pirata
        const response = await axios.get(`http://localhost:8000/pirate/${id}`);
        // Guarda los datos del pirata
        setPirate(response.data);
        // Cambia el estado de carga a false
        setLoading(false);
      } catch (error) {
        console.error('Error getting pirate details:', error);
        setError(error.message); // Guarda el mensaje de error
        setLoading(false);
      }
    };

    getPirateDetails();
  }, [id]); // Ejecuta el efecto cuando el id cambie

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <header className='header-details'>
        <h2 className='h2-details'>Deep Sea Davy</h2>
        <Link className='btn-back' to="/pirates" >Back</Link>
      </header>
      <div className='details-content'>
        <div>
          <img src={pirate.imageUrl} alt={pirate.name} style={{ width: '300px', height: '200px' }} />
          <p className='phrase'>"{pirate.catchPhrase}"</p>
        </div>
        <div className='about-content'>
          <h3>About</h3>
          <p>Position: {pirate.crewPosition}</p>
          <p>Treasures: {pirate.numberOfChests}</p>
          <p>Peg Leg: {pirate.pegLeg ? 'Yes' : 'No'}</p>
          <p>Eye Patch: {pirate.eyePatch ? 'Yes' : 'No'}</p>
          <p>Hook Hand: {pirate.hookHand ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
