import React, { useEffect, useState } from 'react'
import Card from './Cards'
import './Main.css'
import Buttons from './Buttons'
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
			setSpaces('')
		} else {
			setSpaces(newSpaces.residents)
		}
	}
	console.log(data)

	return (
		<div className='main'>
			<AsideBar onSpacesChange={handleSpacesChange} />
			<div className='container'>
				{data.length > 0 ? <Card space={spaces} data={data} /> : <p>Loading...</p>}
				{spaces.length > 0 ? (
					''
				) : (
					<Buttons
						totalPages={totalPages}
						currentPage={currentPage}
						handlePageChange={handlePageChange}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</div>
		</div>
	)
}

export default Main
