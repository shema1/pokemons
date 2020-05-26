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
			<div className='control-panel__sort'>
				<span>sort by:</span>
				<button onClick={() => sortByName('name')}>name</button>
				<button onClick={() => sortByName('types')}>type</button>
				<button onClick={() => sortByName('id')}>number</button>
			</div>
			<div className='control-panel__pagination'>
				<span>Card on page: </span>
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
		</div>
	)
}

ControlPanel.propTypess = {
	sortByName: PropTypes.func,
	changeCardQuantity: PropTypes.func,
}

export default ControlPanel
