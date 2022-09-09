import React from 'react'
import Map from './Map'
import Month from './Month'

export default function Fake() {
  return (
    <>
      <div className="header">
        <img id="banner" src="images/ram_radar_title.png" alt="" />
      </div>
      <div className="content-container">
        <div className="mapbox">
          <div className="map">
            <Map />
          </div>
          <Month />
        </div>
        <div className="update">
          <img src="images/ram_status.png" alt="" width="300px" />
        </div>
      </div>
    </>
  )
}
