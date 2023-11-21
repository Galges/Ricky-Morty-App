import React, { useEffect, useState } from 'react'
import Card from './Cards'

function Main() {
	const [data, setData] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
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
		setCurrentPage(newPage)
	}

	return (
		<>
			<div className='container'>
				{data.length > 0 ? <Card data={data} /> : <p>Loading...</p>}

				<div>
					<button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
					<span>{` Page ${currentPage} of ${totalPages} `}</span>
					<button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
				</div>
			</div>
		</>
	)
}

export default Main
