import React, { useEffect, useState } from "react";
import "./pokedex.scss";
import PokeCard from "../../pokeCard/PokeCard";
import { connect } from "react-redux";
import { pokeListSelector } from "../pokedex.selector";
import * as pokeAction from "../pokedex.action";
import { fetchPokeList, fetchPokeListWhithParam } from "../../gateway/gateway";
const Pokedex = ({ poke, getPoke }) => {
  let [pokeList, setPokeList] = useState({});

  useEffect(() => {
    fetchPokeList().then(response => setPokeList(response));
  }, []);


  const loadMore = () =>{
    fetchPokeListWhithParam(pokeList.next).then(response => setPokeList(response))
  }

  return (
    <>
      <div id="poke_container" class="poke-container">
        {pokeList.results &&
          pokeList.results.map((elem) => <PokeCard {...elem} key={elem.name} />)}
      </div>

      <button className="more" onClick={loadMore}>Load More</button>
    </>
  );
};

const mapState = (state) => {
  return {
    poke: pokeListSelector(state),
  };
};

const mapDispatch = {
  getPoke: pokeAction.getPokeList,
};

export default connect(mapState, mapDispatch)(Pokedex);
