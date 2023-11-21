import React, { useEffect, useState } from 'react'
import Card from './Card'



function Main() {
const [data, setData] = useState([])
const [page, setPage] = useState(2)
const URL =  `https://rickandmortyapi.com/api/character?page=${page}`


const fetchInfo = () => {
    return fetch(URL)
    .then((res) => res.json())
    .then((d) => setData(d.results))
}
useEffect(() => {
    fetchInfo()
},[])

console.log(data);

  return (
    <>
    <div className='container'>
    {/* <SideBar /> */}
    <Card data={data} />
    </div>
    
    </>
  )
}

export default Main