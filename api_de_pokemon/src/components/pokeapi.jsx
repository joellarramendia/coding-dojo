import React, { useState } from "react";

const Pokeapi = () => {
    const [pokemonList, setPokemonList] = useState([]); // Estado para almacenar la lista de nombres de Pokémon
    const [error, setError] = useState(null); // Estado para almacenar cualquier error

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807}") 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar los datos de los Pokémon');
                }
                return response.json();
            })
            .then(data => {
                // Extrae los nombres de los Pokémon de la respuesta
                const pokemonNames = data.results.map(pokemon => pokemon.name);
                // Actualiza el estado con la lista de nombres de Pokémon
                setPokemonList(pokemonNames);
            })
            .catch(error => setError(error)); 
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
            {/* Renderiza el error si existe */}
            {error && (
                <p>Error: {error}</p>
            )}
        </div>
    );
}

export default Pokeapi;
