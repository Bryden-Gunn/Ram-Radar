import React from 'react'
import { Marker } from '@react-google-maps/api'

function Icon(props) {
  return (
    <Marker
      icon={{
        url: '/images/ram_icon.png',
        scaledSize: { width: 56.6, height: 33.3 },
      }}
      position={props.position}
    />
  )
}

export default Icon
