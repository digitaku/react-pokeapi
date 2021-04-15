import { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Header from "../components/Header";
import api from "../services/api";

import "../styles/global.css";
import "../styles/pages/home.css";
import capitalize from "../utils/capitalize-string";
import Details from "./Details";


interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<{
    name: string;
    url: string;
  }>;
}

function Home() {
  const [pokemons, setPokemons] = useState<PokemonResponse>();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pickPokemon, setPickPokemon] = useState("Pikachu");
  const [offset, setOffset] = useState(0);
  Modal.setAppElement("#root");

  useEffect(() => {
    api
      .get(`pokemon?limit=10&offset=${offset}`)
      .then((response: AxiosResponse<PokemonResponse>) => {
        setPokemons(response.data);
      });
  }, [offset]);

  function close() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  if (pokemons === undefined) return <h1>carregando</h1>;
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <div className="section">
            {pokemons.results.map((pokemon, index) => {
              return (
                <div
                  className="pokemon"
                  key={index}
                  onClick={() => {
                    openModal();
                    setPickPokemon(pokemon.name);
                  }}
                >
                  <p>{capitalize(pokemon.name)} </p>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                      index + offset + 1
                    }.svg`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </main>
        <div className="modal">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={close}
            contentLabel="Example Modal"
            appElement={""}
          >
            <Details name={pickPokemon} />
          </Modal>
        </div>

        <nav className="navigation">
          <ul>
            <li
              onClick={() => {
                if (offset === 0) {
                  setOffset(0);
                } else {
                  setOffset(offset - 10);
                }
              }}
            >
              ◀
            </li>
            <li
              onClick={() => {
                setOffset(offset + 10);
              }}
            >
              ▶
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;
