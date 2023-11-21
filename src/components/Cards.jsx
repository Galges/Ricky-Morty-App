import React from 'react'
import './Cards.css'

function Cards({data}) {
  return (
    <>
    <div className='boxes'>
     {data.map((x) => {
          let { id, name, image, status, location } = x;

          return (
            <div key={id} className="box">
              <div className="box-Img">
                <img src={image} alt={name} />
              </div>
              <div className="status">
                <p className="">{status}</p>
              </div>
              <div className="character-Info">
                <p className="name">{name}</p>
                <p className="location">{location.name}</p>
              </div>
            </div>
          );
        })
      }
      </div>
    </>
    
  )
}

export default Cards