import React, { useEffect, useState } from 'react'
import './Cards.css'

function Cards({ data, space }) {
	const [test, setTest] = useState([])
	const [fetchedData, setFetchedData] = useState([])

	useEffect(() => {
		setTest(space)
	}, [space])

	useEffect(() => {
		const fetchDataForLinks = async () => {
			if (test.length > 0) {
				const fetchedResults = await Promise.all(
					test.map(async link => {
						const response = await fetch(link)
						const data = await response.json()
						return data
					})
				)

				setFetchedData(fetchedResults)
			}
		}

		fetchDataForLinks()
	}, [test])

	return (
		<>
			<div className='boxes'>
				{space.length === 0
					? data.map(x => {
							let { id, name, image, status, location } = x

							return (
								<div key={id} className='box'>
									<div className='box-Img'>
										<img src={image} alt={name} />
									</div>
									<div className='status'>
										<p className=''>{status}</p>
									</div>
									<div className='character-Info'>
										<p className='name'>{name}</p>
										<p className='location'>{location.name}</p>
									</div>
								</div>
							)
					  })
					: fetchedData.map(x => {
							let { id, name, image, status, location } = x

							return (
								<div key={id} className='box'>
									<div className='box-Img'>
										<img src={image} alt={name} />
									</div>
									<div className='status'>
										<p className=''>{status}</p>
									</div>
									<div className='character-Info'>
										<p className='name'>{name}</p>
										<p className='location'>{location.name}</p>
									</div>
								</div>
							)
					  })}
			</div>
		</>
	)
}

export default Cards
