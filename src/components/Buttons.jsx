import React from 'react'
import { SlControlForward, SlControlRewind } from 'react-icons/sl'

function Buttons({ setCurrentPage, handlePageChange, currentPage, totalPages }) {
	return (
		<>
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
		</>
	)
}

export default Buttons
