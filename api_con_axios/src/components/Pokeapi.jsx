import React, { useState } from "react";
import axios from 'axios';

const Pokeapi = () => {
    const [pokemonList, setPokemonList] = useState([]); // Estado para almacenar la lista de nombres de Pokémon
    const [error, setError] = useState(null); // Estado para almacenar cualquier error

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                const data = response.data;
                // Extrae los nombres de los Pokémon de la respuesta
                const pokemonNames = data.results.map(pokemon => pokemon.name);
                // Actualiza el estado con la lista de nombres de Pokémon
                setPokemonList(pokemonNames);
                setError(null); // Reinicia el estado de error si la solicitud se completó con éxito
            })
            .catch(error => {
                setError('La solicitud a la API falló');
                setPokemonList([]); // Reinicia la lista de nombres de Pokémon en caso de error
            });
    };

    return (
        <div>
            <h1>Pokeapi</h1>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            {/* Renderiza la lista de nombres de Pokémon */}
            <ul>
                {pokemonList.map((pokemonName, index) => (
                    <li key={index}>{pokemonName}</li>
                ))}
            </ul>
            {/* Renderiza el mensaje de error si existe */}
            {error && (
                <p>Error: {error}</p>
            )}
        </div>
    );
}

export default Pokeapi;
