import React from 'react'
import './FilterSpace.css'
import { useState, useEffect } from 'react'

function SpacesFilter({ onSelectLocation }) {
	const [locations, setLocations] = useState('')
	const [selectedLocation, setSelectedLocation] = useState('')
	const [active, setActive] = useState('spacesList')

	const URL = 'https://rickandmortyapi.com/api/location'

	const fetchLocation = () => {
		return fetch(URL)
			.then(res => res.json())
			.then(res => setLocations(res.results))
	}
	console.log(locations)
	const selectLocation = location => {
		if (selectedLocation === location) {
			setSelectedLocation('')
		} else {
			setSelectedLocation(location)
		}
	}
	useEffect(() => {
		fetchLocation()
	}, [])

	useEffect(() => {
		onSelectLocation(selectedLocation)
	}, [selectedLocation, onSelectLocation])

	const btnToggler = () => {
		if (active === 'spacesList') {
			setActive('spacesList-active')
		} else {
			setActive('spacesList')
		}
	}
	return (
		<>
			<div>
				<div className='spaceFilter'>
					<div className='filterName'>Spaces</div>
					<button onClick={btnToggler} className='btn btn-togger'>
						{' '}
						Click{' '}
					</button>
				</div>
				<div className={active}>
					{locations &&
						locations.map(location => {
							return (
								<>
									{location.residents.length !== 0 ? (
										<div key={location.id} className='space'>
											<label className='space-name' type='text'>
												{location.name}
											</label>
											<input
												type='checkbox'
												onClick={() => selectLocation(location)}
												checked={selectedLocation === location}></input>
										</div>
									) : (
										''
									)}
								</>
							)
						})}
				</div>
			</div>
		</>
	)
}

export default SpacesFilter
