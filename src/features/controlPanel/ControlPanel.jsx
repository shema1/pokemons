import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ControlPanel = ({ sortByName, changeCardQuantity }) => {
	const [activeButton, setActiveButton] = useState(12)

	const buttonHandler = value => {
		changeCardQuantity(value)
		setActiveButton(value)
	}

	return (
		<div className='control-panel'>
			<button onClick={() => sortByName()}>Sort by name</button>
			<button
				className={activeButton === 6 ? 'active-btn' : ''}
				onClick={() => buttonHandler(6)}
			>
				6
			</button>
			<button
				className={activeButton === 12 ? 'active-btn' : ''}
				onClick={() => buttonHandler(12)}
			>
				12
			</button>
			<button
				className={activeButton === 18 ? 'active-btn' : ''}
				onClick={() => buttonHandler(18)}
			>
				18
			</button>
		</div>
	)
}

ControlPanel.propTypess = {
	sortByName: PropTypes.func,
	changeCardQuantity: PropTypes.func,
}

export default ControlPanel
