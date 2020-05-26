import React, { useEffect, useState } from 'react'
import './pokedex.scss'
import PokeCard from '../pokeCard/PokeCard'
import {
	fetchPokeList,
	fetchPokeListWhithParam,
	fetchPokeListWhithQuantity,
	fetchPoke,
} from '../gateway/gateway'
import ControlPanel from '../controlPanel/ControlPanel'

const Pokedex = () => {
	const [pokeParam, setPokeParam] = useState("")
	const [pageCounter, setPageCounter] = useState(0)
	const [cardOnPage, setCardOnPage] = useState(12)
	const [pokemonList, setPokemonList] = useState([])

	useEffect(() => {
		getPokeList()
	}, [])

	const getPokeList = () => {
		let responseList = []
		fetchPokeList().then(response => {
			setPokeParam(response.next)
			response.results.map(elem => responseList.push(fetchPoke(elem.url)))
			Promise.all(responseList).then(response => setPokemonList(response))
		})
	}

	const loadMore = () => {
		let responseList = []
		fetchPokeListWhithParam(pokeParam).then(response => {
			setPokeParam(response.next)
			setPageCounter(pageCounter + cardOnPage)
			response.results.map(elem => responseList.push(fetchPoke(elem.url)))
			Promise.all(responseList).then(response => setPokemonList(response))
		})
	}

	const changeCardQuantity = limit => {
		setCardOnPage(limit)
		let responseList = []
		fetchPokeListWhithQuantity(pageCounter, limit).then(response => {
			setPokeParam(response.next)
			response.results.map(elem => responseList.push(fetchPoke(elem.url)))
			Promise.all(responseList).then(response => setPokemonList(response))
		})
	}

	const sortByName = param => {
		console.log(param)
		let newPokemonList = pokemonList.slice().sort((a, b) => {
			if (a[param] > b[param]) {
				return 1
			}
			if (a[param] < b[param]) {
				return -1
			}
			return 0
		})
		setPokemonList(newPokemonList)
	}

	return (
		<>
			<h1 className='title'>Pokedex</h1>
			<ControlPanel
				sortByName={sortByName}
				changeCardQuantity={changeCardQuantity}
			/>
			<div className='poke-container'>
				{pokemonList.length !== 0 &&
					pokemonList.map(elem => <PokeCard {...elem} key={elem.name} />)}
			</div>

			<button className='more' onClick={loadMore}>
				Load More
			</button>
		</>
	)
}

export default Pokedex
