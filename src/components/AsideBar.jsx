import React, { useState } from 'react'
import './AsideBar.css'
import './SpacesFilter'
import SpacesFilter from './SpacesFilter'
import GenderFilter from './GenderFilter'

function AsideBar({ onSpacesChange }) {
	const [spaces, setSpaces] = useState('')
	const handleSelectedLocation = selectedLocation => {
		setSpaces(selectedLocation)
		onSpacesChange(selectedLocation)
	}
	return (
		<>
			<div className='sidebox'>
				<h1>Filters</h1>
				<div className='filtersList'>
					<SpacesFilter onSelectLocation={handleSelectedLocation} />
					<GenderFilter />
				</div>
			</div>
		</>
	)
}

export default AsideBar
