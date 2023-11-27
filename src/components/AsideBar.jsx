import React from 'react'
import './AsideBar.css'
import SpacesFilter from './SpacesFilter'


function AsideBar() {
  return (
    <>
    <div className='sidebox'>
        <h1>Filters</h1>
        <div className='filtersList'>
          <SpacesFilter />
          
            
        </div>
    </div>
    </>
  )
}

export default AsideBar