import React, { useEffect, useState } from 'react'
import Card from './Cards'
import './Main.css'
import { SlControlForward, SlControlRewind } from "react-icons/sl";

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
	
	const handlePageChange = (newPage)  => {
		if(newPage === 0 || newPage === 43)  {
			return
		} else
		setCurrentPage(newPage)
		
	}

	return (
		<>
			<div className='container'>
				{data.length > 0 ? <Card data={data} /> : <p>Loading...</p>}

				<div className='buttons'>
					<button onClick={()=>setCurrentPage(1)}  className='firstPage'> <SlControlRewind /> </button>
					
					< button className='btn' onClick={() => handlePageChange(currentPage - 1)}>Previous</ button>
					<span>{` Page ${currentPage} of ${totalPages} `}</span>
					< button className='btn' onClick={() => handlePageChange(currentPage + 1)}>Next</ button>
					<button onClick={()=>setCurrentPage(42)} className='lastPage'> <SlControlForward /> </button>
				</div>
			</div>
		</>
	)
}

export default Main
