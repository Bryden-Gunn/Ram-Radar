import React from 'react'
import Map from './Map'

export default function Fake(props) {
  return (
    <>
      <div className="header">
        <img id="banner" src="images/ram_radar_title.png" alt="" />
      </div>
      <div className="content-container">
        <div className="mapbox">
          <div className="map">
            <Map month={props.month} />
          </div>
        </div>
        <div className="update">
          <img src="images/ram_status.png" alt="" width="300px" />
        </div>
      </div>
    </>
  )
}
