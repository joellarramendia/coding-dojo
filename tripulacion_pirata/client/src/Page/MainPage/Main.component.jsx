import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    numberOfChests: 0,
    catchPhrase: '',
    crewPosition: '',
    pegLeg: true,
    eyePatch: true,
    hookHand: true
  });

  const [captainSelected, setCaptainSelected] = useState(false);

  useEffect(() => {
    if (formData.crewPosition === 'captain') {
      setCaptainSelected(true);
    } else {
      setCaptainSelected(false);
    }
  }, [formData.crewPosition]);

  const handleChange = (e) => {//Función que se ejecuta cuando cambia el valor de un input checkbox
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {//Función que se ejecuta cuando se envía el formulario
    e.preventDefault();
    try {
      //Envía los datos del formulario al servidor
        await axios.post('http://localhost:8000/pirate/', formData);
        console.log('Pirate added successfully');
    } catch (error) {
        console.error('Error adding pirate:', error);
        if (error.response && error.response.status === 400) {
            alert('Error: There is already a captain.');
        } else {
        }
    }
};


  return (
    <div>
    <header className='header-main'>
      <h2 className='h2-main'>Add Pirate</h2>
      <Link className='btn-list-page' to="/pirates">Crew Board</Link>
    </header>
      <form onSubmit={handleSubmit} className='form-addPirata'>
          <div className='flex-left'>
            <div className='form-content'>
              <label>Name: </label> <br />
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className='form-content'>
              <label>Image URL:</label><br />
              <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
            </div>
            
            <div className='form-content'>
              <label>#of Treasure Chests:</label> <br />
              <input type="number" name="numberOfChests" value={formData.numberOfChests} onChange={handleChange} required />
            </div>
            
            <div className='form-content'>
              <label>Catch Phrase: </label> <br />
              <input type="text" name="catchPhrase" value={formData.catchPhrase} onChange={handleChange} />
            </div>
          
            </div> {/* Cierre de div flex-left */}

          <div className='flex-right'>
            <div className='form-content'>
              <label>Crew Position: </label><br />
                <select name="crewPosition" value={formData.crewPosition} onChange={handleChange} required>
                  <option value="">Select Position</option>
                  <option value="captain" disabled={captainSelected}>Captain</option>
                  <option value="firstmate">First Mate</option>
                  <option value="quarter">Quarter Master</option>
                  <option value="boatswain">Boatswain</option>
                  <option value="powder">Powder Monkey</option>
                </select>
            </div>
          
            <div className='form-content'>
              <input type="checkbox" name="pegLeg" checked={formData.pegLeg} onChange={handleChange} />
              <label>Peg Leg</label>
            </div>

            <div className='form-content'>
              <input type="checkbox" name="eyePatch" checked={formData.eyePatch} onChange={handleChange} />
              <label>Eye Patch</label>
            </div>
            
            <div className='form-content'>
              <input type="checkbox" name="hookHand" checked={formData.hookHand} onChange={handleChange} />
              <label>Hook Hand</label>
            </div>
            
            <button type="submit">Add Pirate</button>
          </div> {/* Cierre de div flex-right */}
      </form>
    </div>
  );
};

export default Main;
