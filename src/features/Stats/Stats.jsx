import React from 'react'
import './stats.scss'
import PropTypes from 'prop-types'

const Stats = ({ stats }) => {
	return (
		<ul className='stats'>
			{stats &&
				stats.map(elem => (
					<li className='stats-elem' key={elem.stat.name}>
						<span className='stats-elem__name'>{elem.stat.name}</span>{' '}
						<span className='stats-elem__value'>{elem.base_stat}</span>
					</li>
				))}
		</ul>
	)
}

Stats.propTypes = {
	stats: PropTypes.object,
}
export default Stats
