import React, { useState, useEffect } from "react";
import { fetchPoke, fetchPokeList } from "../gateway/gateway";
import cardColor from "../utilities/cardColor";
import Stats from "../Stats/Stats";

const PokeCard = ({ name, url }) => {
  let [pokemon, setPokemon] = useState("");
  let [openWindow, setOpenWindow] = useState(false);
  let cardColor = pokemon
    ? pokemon.types[pokemon.types.length - 1].type.name
    : 0;

  useEffect(() => {
    fetchPoke(url).then((response) => setPokemon(response));
  }, []);


   const hideDetails = () =>{
    setOpenWindow(false);
   }
  const details = () => {
    setOpenWindow(true);
  };





  let active = openWindow ? " active " : "";
  let hide = openWindow ? " " : " hide";

  return (
    <>
      <div className={`overlay ${hide}`} onClick={hideDetails}></div>
      <div className={`pokemon ${cardColor} ${active}`} onClick={details}>
        <div class="img-container">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt="Bulbasaur"
          />
        </div>
        <div class="info">
          <span class="number">#{pokemon.id}</span>
          <h3 class="name">{name}</h3>
          <small class="type">
            Type:
            {pokemon &&
              pokemon.types.map((elem) => <span>{elem.type.name} </span>)}
          </small>
          {openWindow && <Stats stats={pokemon.stats} />}
        </div>
      </div>
    </>
  );
};

export default PokeCard;
