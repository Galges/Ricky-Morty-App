import React from 'react'
import './FilterSpace.css'
import { useState, useEffect } from 'react'

function SpacesFilter() {
    const [locations, setLocations] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')
    const [active, setActive] = useState('spacesList')

    const URL = 'https://rickandmortyapi.com/api/location'

    const fetchLocation = () => {
        return fetch(URL)
        .then(res => res.json())
        .then(res => setLocations(res.results))
    }

    useEffect(() => {
        fetchLocation()
    }, [])

    const btnToggler = () => {
        if(active === 'spacesList') {
            setActive('spacesList-active')
        } else {
            setActive('spacesList')
        }
    }

    const selectLocation = (location) => {
        if(selectedLocation === location) {
            setSelectedLocation('')
        } else {
            setSelectedLocation(location)
        }
    }

	return (
		<>  
            <div>

			<div className='spaceFilter'>
				<div className='filterName'>Spaces</div>
				<button onClick={btnToggler} className='btn btn-togger'> click </button>
			</div>
                <div className={active}>
                {locations && locations.map((location) => {
                    

                    return (
                        <>
                        <div key={location.id} className='space'>
                        <label type='text'>{location.name}</label>
                        <input type="checkbox" onClick={() => selectLocation(location)} checked={selectedLocation === location}></input>
                        </div>
                        </>
                    )
                    }
                    )}
                   
                </div>
            </div>
		</>
	)
}

export default SpacesFilter