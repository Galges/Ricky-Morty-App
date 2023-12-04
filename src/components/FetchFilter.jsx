// import React from 'react'
// import { useState, useEffect } from 'react'


// function FetchFilter() {

//     const [locations, setLocations] = useState([])

//     const URL = 'https://rickandmortyapi.com/api/location'
    
//     const fetchLocation = () => {
//         return fetch(URL)
//         .then(res => res.json())
//         .then(res => setLocations(res))
//     }
    
//     useEffect(() => {
//         fetchLocation()
//     }, [])
    
//     console.log(locations);
    
//   return (
//     <>
//     <SpacesFilter setLocation={locations} /> </>
//   )
// }

// export default FetchFilter
1