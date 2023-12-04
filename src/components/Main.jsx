import React, { useEffect, useState } from 'react'
import Card from './Cards'
import './Main.css'
import { SlControlForward, SlControlRewind } from 'react-icons/sl'

import AsideBar from './AsideBar'

function Main() {
	const [data, setData] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [spaces, setSpaces] = useState('')

	const totalPages = 42

	const URL = `https://rickandmortyapi.com/api/character?page=${currentPage}`

	const fetchInfo = () => {
		return fetch(URL)
			.then(res => res.json())
			.then(d => setData(d.results))
	}

	useEffect(() => {
		fetchInfo()
	}, [currentPage])

	const handlePageChange = newPage => {
		if (newPage === 0 || newPage === 43) {
			return
		} else setCurrentPage(newPage)
	}
	const handleSpacesChange = newSpaces => {
		if (newSpaces.length === 0) {
			return
		} else {
			setSpaces(newSpaces.residents)
		}
	}
	console.log(spaces)

	return (
		<div className='main'>
			<AsideBar onSpacesChange={handleSpacesChange} />
			<div className='container'>
				{data.length > 0 ? <Card space={spaces} data={data} /> : <p>Loading...</p>}

				<div className='buttons'>
					<button onClick={() => setCurrentPage(1)} className='firstPage'>
						{' '}
						<SlControlRewind />{' '}
					</button>

					<button className='btn-prev' onClick={() => handlePageChange(currentPage - 1)}>
						Prev
					</button>
					<span>{` Page ${currentPage} of ${totalPages} `}</span>
					<button className='btn-next' onClick={() => handlePageChange(currentPage + 1)}>
						Next
					</button>
					<button onClick={() => setCurrentPage(42)} className='lastPage'>
						{' '}
						<SlControlForward />{' '}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Main
