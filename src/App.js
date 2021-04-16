import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import { getPokemon } from "./services/pokemon";
import "./App.css";

function App() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const initialURL = "https://pokeapi.co/api/v2/pokemon";

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(initialURL);
            const data = await response.json();
            await loadPokemon(data.results);
            setLoading(false);
        }
        fetchData();
    }, []);
    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(
            data.map(async (pokemon) => {
                let pokemonRecord = await getPokemon(pokemon);
                return pokemonRecord;
            })
        );
        //console.log ("pokemonData",_pokemonData)
        setPokemonData(_pokemonData);
    };

    const removePokemon = (id) => {
        setPokemonData(() => pokemonData.filter((p) => p.id !== id));
    };

    return (
        <>
            <Navbar />
            <div>
                {loading ? (
                    <h1 style={{ textAlign: "center" }}>Loading...</h1>
                ) : (
                    <>
                        <div className="line"></div>

                        <div className="grid-container">
                            {pokemonData.map((pokemon, i) => {
                                return (
                                    <Card
                                        key={i}
                                        pokemon={pokemon}
                                        removePokemon={removePokemon}
                                    />
                                );
                            })}
                        </div>

                        <div className="line"></div>
                    </>
                )}
            </div>
        </>
    );
}

export default App;
