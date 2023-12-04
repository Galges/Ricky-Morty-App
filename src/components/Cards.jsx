import React, { useEffect, useState } from 'react'
import './Cards.css'

function Cards({ data, space }) {
	const [test, setTest] = useState([])

	useEffect(() => {
		setTest(space)
	})

	console.log(test)
	return (
		<>
			<div className='boxes'>
				{data.map(x => {
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
