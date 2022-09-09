import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import Icon from './Icon'
import { getRams } from '../apiClient'

const key = process.env.GOOGLE_MAPS_API_KEY

const containerStyle = {
  width: '100%',
  height: '100vh',
  borderRadius: '2rem',
  marginBottom: '10px',
}

const center = {
  lat: -36.84103635786658,
  lng: 174.7673831303457,
}

const mapOptions = {
  mapId: 'ca2e7339e7168224',
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
}

function Map() {
  const [rams, setRams] = useState([])

  useEffect(() => {
    getRams()
      .then((res) => {
        console.log(res.body)
        setRams(res.body)
      })
      .catch((err) => console.err(err.message))
  }, [])
  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={mapOptions}
      >
        {rams.map((marker) => {
          const position = {
            lat: marker.latitude,
            lng: marker.longitude,
          }
          console.log(position)
          return <Icon key={marker.id} position={position} />
        })}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
