import React, { useState } from 'react'
import './GenderFilter.css'

function GenderFilter() {
	const [active, setActive] = useState('genderList')
	const [selectedGender, setSelectedGender] = useState('')

	const togglerButton = () => {
		if (active === 'genderList') {
			setActive('genderList-active')
		} else {
			setActive('genderList')
		}
	}

	const selectGender = gender => {
		if (selectedGender === gender) {
			setSelectedGender('')
		} else {
			setSelectedGender(gender)
		}
	}

	return (
		<>
			<div className='genderFilter'>
				<div className='filterName'>
					<p>Gender</p>
				</div>
				<button onClick={togglerButton} className='btn btn-togger'>
					Click
				</button>
			</div>
			<div className={active}>
				<div className='genderChoice'>
					<label className='gender-name' type='text'>
						Male
					</label>
					<input onClick={() => selectGender('male')} checked={selectedGender === 'male'} type='checkbox' />
				</div>
				<div className='genderChoice'>
					<label className='gender-name' type='text'>
						Female
					</label>
					<input onClick={() => selectGender('female')} checked={selectedGender === 'female'} type='checkbox' />
				</div>
			</div>
		</>
	)
}

export default GenderFilter
