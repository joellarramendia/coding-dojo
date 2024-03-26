import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Bienvenido al Explorador de Star Wars</h1>
      <SearchCharacter />
    </div>
  );
}

function SearchCharacter() {
  const [resource, setResource] = useState('');
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const getResources = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${resource}/${id}`);
      setData(response.data);
      setError('');
    } catch (error) {
      setError('Estos no son los droides que está buscando.');
      setData(null);
    }
  };

  const handleSelectChange = (event) => {
    setResource(event.target.value);
    setData(null);
    setError('');
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
    setData(null);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getResources();
  };

  return (
    <div>
      <h2>Buscar Personaje de Star Wars</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="resource">Seleccione un recurso:</label>
        <select id="resource" value={resource} onChange={handleSelectChange}>
          <option disabled="true" value="">Selecciona</option> 
          <option className='options' value="people">Personajes</option>
          <option className='options' value="planets">Planetas</option>
          <option className='options' value="films">Películas</option>
          <option className='options' value="species">Especies</option>
          <option className='options' value="vehicles">Vehículos</option>
          <option className='options' value="starships">Naves espaciales</option>
        </select>
        <label htmlFor="id">ID:</label>
        <input type="number" id="id" value={id} onChange={handleIdChange} />
        <button className='btn-search' type="submit">Buscar</button>
      </form>
      {error && (
        <div>
          <p>{error}</p>
          <img src="" alt="Obi-wan Kenobi" />
        </div>
      )}
      {data && (
        <div>
          <h2>Resultado:</h2>
          <p>Name: {data.name}</p>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
          <p>Hair color: {data.hair_color}</p>
          <Link to={`/${id}`}>Ver detalles</Link>
        </div>
      )}
    </div>
  );
}

function CharacterDetail() {
  let { id } = useParams();
  return (
    <div>
      <h2>Detalle del Personaje con ID: {id}</h2>
      <p>Aquí iría la información detallada del personaje con el ID {id}</p>
    </div>
  );
}

export default App;
