import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import api from "../services/api";

import "../styles/global.css";
import "../styles/pages/home.css";
import capitalize from "../utils/capitalize-string";

interface Pokemon {
  name: string;
  url: string;
}
function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  useEffect(() => {
    api.get("generation/1").then((response) => {
      setPokemons(response.data.pokemon_species);
    });
  }, []);
  if (pokemons === undefined) return <h1>carregando</h1>;
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <div className="section">
            {pokemons.map((pokemon, index) => {
              return (
                <div className="pokemon" key={index}>
                  <Link to={`pokemon/${pokemon.name}`}>
                    {capitalize(pokemon.name)}
                  </Link>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
