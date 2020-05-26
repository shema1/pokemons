import React, { useState, useEffect } from 'react'
import { fetchPoke } from '../gateway/gateway'
import './pokecard.scss'
import Stats from '../Stats/Stats'
import PropTypes from 'prop-types'

const PokeCard = ({ name, url }) => {
	let [pokemon, setPokemon] = useState('')
	let [openWindow, setOpenWindow] = useState(false)
	let cardColor = pokemon
		? pokemon.types[pokemon.types.length - 1].type.name
		: 0

	useEffect(() => {
		fetchPoke(url).then(response => setPokemon(response))
	}, [url])

	const hideDetails = () => {
		setOpenWindow(false)
	}
	const details = () => {
		setOpenWindow(true)
	}

	let active = openWindow ? ' active ' : ''
	let hide = openWindow ? ' ' : ' hide'

	return (
		<>
			<div className={`overlay ${hide}`} onClick={hideDetails}></div>
			<div className={`pokemon ${cardColor} ${active}`} onClick={details}>
				<div className='img-container'>
					<img
						src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
						alt='Bulbasaur'
					/>
				</div>
				<div className='info'>
					<span className='number'>#{pokemon.id}</span>
					<h3 className='name'>{name}</h3>
					<small className='type'>
						{pokemon &&
							pokemon.types.map(elem => (
								<span
									className={`type__${elem.type.name}`}
									key={elem.type.name}
								>
									{elem.type.name}{' '}
								</span>
							))}
					</small>
					{openWindow && <Stats stats={pokemon.stats} />}
				</div>
			</div>
		</>
	)
}

PokeCard.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
}
export default PokeCard
