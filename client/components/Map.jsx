import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import Icon from './Icon'
import { getRams } from '../apiClient'

const key = process.env.GOOGLE_MAPS_API_KEY

const containerStyle = {
  width: '100%',
  height: '78vh',
  borderRadius: '2rem',
  marginBottom: '10px',
}

const center = {
  lat: -36.84103635786658,
  lng: 174.7673831303457,
}

const mapOptions = {
  mapId: '613bf17a4c9d1678',
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
}

function Map(props) {
  const [rams, setRams] = useState([])

  const filteredRams = rams.filter((ram) => {
    if (props.month == 'all') {
      return true
    } else if (props.month == '') {
      return false
    } else if (props.month == 'none') {
      return false
    } else if (ram.month == props.month) {
      return true
    }
  })

  useEffect(() => {
    getRams()
      .then((res) => {
        setRams(res.body)
      })
      .catch((err) => console.err(err.message))
  }, [props])

  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12.25}
        options={mapOptions}
      >
        {filteredRams.map((marker) => {
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
