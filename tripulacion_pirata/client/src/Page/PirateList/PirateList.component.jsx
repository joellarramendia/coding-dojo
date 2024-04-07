import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import './PirateList.css';

const PirateList = () => {
  const [pirates, setPirates] = useState([]);

  useEffect(() => {
    getPirates();
  }, []);

  const getPirates = async () => {
    try {
      const response = await axios.get('http://localhost:8000/pirate/');
      setPirates(response.data);
    } catch (error) {
      console.error('Error getting pirates:', error);
    }
  };


  const handleWalkThePlank = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/pirate/${id}`);
      console.log('Pirate deleted successfully');
      getPirates();
    } catch (error) {
      console.error('Error deleting pirate:', error);
    }
  };

  return (
    <div>
      <header className='header-list'>
        <h2 className='h2-list'>Pirate Crew</h2>
        <Link className='btn-add' to="/pirate/new" >Add Pirate</Link>
      </header>
        {pirates.map(pirate => (
          <div className='list-content' key={pirate._id}>
            <div>
              <img src={pirate.imageUrl} alt={pirate.name} style={{ width: '130px', height: '130px', marginRight: '100px', border: '3px solid black' }} />
            </div>
            <div className='actions'>
              <div>
                <h3>{pirate.name}</h3>
              </div>
              <div>
                <Link className='btn-view' to={`/pirate/${pirate._id}`}>View Pirate</Link>
                <button className='btn-delete' onClick={() => handleWalkThePlank(pirate._id)}>Walk the Plank</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PirateList;
