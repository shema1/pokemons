import React, { useEffect, useState } from 'react'
import './pokedex.scss'
import PokeCard from '../pokeCard/PokeCard'
import {
	fetchPokeList,
	fetchPokeListWhithParam,
	fetchPokeListWhithQuantity,
} from '../gateway/gateway'
import ControlPanel from '../controlPanel/ControlPanel'

const Pokedex = () => {
	const [pokeList, setPokeList] = useState([])
	const [pokeParam, setPokeParam] = useState()
	const [indicator, setIndicator] = useState(false)
	const [pageCounter, setPageCounter] = useState(0)
	const [cardOnPage, setCardOnPage] = useState(12)

	useEffect(() => {
		getPokeList()
	}, [])

	const getPokeList = () => {
		fetchPokeList().then(response => {
			setPokeList(response.results)
			setPokeParam(response.next)
		})
	}
	const loadMore = () => {
		fetchPokeListWhithParam(pokeParam).then(response => {
			setPokeList(response.results)
			setPokeParam(response.next)
			setPageCounter(pageCounter + cardOnPage)
		})
	}

	const changeCardQuantity = limit => {
		setCardOnPage(limit)
		fetchPokeListWhithQuantity(pageCounter, limit).then(response => {
			setPokeList(response.results)
			setPokeParam(response.next)
		})
	}
	const sortByName = () => {
		let newPokeList = pokeList.sort((a, b) => {
			if (a.name > b.name) {
				return 1
			}
			if (a.name < b.name) {
				return -1
			}
			return 0
		})
		setPokeList(newPokeList)
		setIndicator(!indicator)
	}

	return (
		<>
			<h1 className='title'>Pokedex</h1>
			<ControlPanel
				sortByName={sortByName}
				changeCardQuantity={changeCardQuantity}
			/>
			<div className='poke-container'>
				{pokeList &&
					pokeList.map(elem => <PokeCard {...elem} key={elem.name} />)}
			</div>

			<button className='more' onClick={loadMore}>
				Load More
			</button>
		</>
	)
}

export default Pokedex
