import React from 'react'
import { Marker } from '@react-google-maps/api'

function Icon(props) {
  return (
    <Marker
      icon={{
        url: '/icons/car-red-svgrepo-com.svg',
        scaledSize: { width: 100, height: 100 },
      }}
      position={props.position}
    />
  )
}

export default Icon
