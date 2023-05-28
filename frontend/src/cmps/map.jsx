import React from 'react'
import GoogleMapReact from 'google-map-react'
import { useState } from 'react'

function Marker() {
  return (
    <div
      style={{
        height: '1em',
        width: '1em',
        borderRadius: '50%',
        background: 'red',
      }}
    ></div>
  )
}

export default function SimpleMap() {
  const [center, setCenter] = useState({ lat: 32.794, lng: 34.9896 })
  const zoom = 10
  const branches = [
    {
      city: 'Haifa',
      id: 101,
      position: {
        lat: 32.794,
        lng: 34.9896,
      },
    },
    {
      city: 'Hadera',
      id: 102,
      position: {
        lat: 32.437408,
        lng: 34.925621,
      },
    },
    {
      city: 'Tel Aviv',
      id: 103,
      position: {
        lat: 32.0853,
        lng: 34.781769,
      },
    },
  ]

  return (
    <div className="map-content">
      {branches.map((branch) => {
        return (
          <button key={branch.city} onClick={() => setCenter(branch.position)}>
            {branch.city}
          </button>
        )
      })}
      <div className="map-display" style={{ height: '40vh', width: '50vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBuHlt9fI0dnkVlGJiqb2ceGqNFO7jFWs0' }}
          defaultCenter={center}
          center={center}
          defaultZoom={zoom}
        >
          {branches.map((branch) => {
            return (
              <Marker
                lat={branch.position.lat}
                lng={branch.position.lng}
                key={branch.id}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    </div>
  )
}
