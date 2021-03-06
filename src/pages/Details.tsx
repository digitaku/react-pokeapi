import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import api from "../services/api";
import capitalize from "../utils/capitalize-string";
import getColorType from "../utils/color-type";

import "../styles/pages/details.css";

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

interface Props {
  name: string;
}
function Details(name: Props) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    api.get(`pokemon/${name.name}`).then((response) => {
      setPokemon(response.data);
    });
  }, [name]);
  if (pokemon == null) return <h1>Carregando</h1>;
  return (
    <>
      <div className="pokemon-container">
        <div
          className="pokemon"
          style={{
            borderColor: getColorType(pokemon.types[0].type.name),
            borderStyle: "solid",
            borderWidth: 5,
          }}
        >
          <h2 style={{ color: getColorType(pokemon.types[0].type.name) }}>
            {capitalize(pokemon.name)}
          </h2>
          <div className="about-container">
            <div className="about">
              <p>
                <strong>Tipos:</strong>
                {pokemon.types.map((type) => {
                  return (
                    <span
                      key={type.type.name}
                      style={{ color: getColorType(type.type.name) }}
                    >
                      {" "}
                      {capitalize(type.type.name)}
                    </span>
                  );
                })}
              </p>
              <p>
                <strong>Altura:</strong> {pokemon.height}
              </p>
              <p>
                <strong>Peso:</strong> {pokemon.weight.toString()}
              </p>
            </div>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
