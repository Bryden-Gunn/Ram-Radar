import React from 'react'
import Map from './Map'

export default function Fake() {
  return (
    <>
      <div className="header">
        <img src="images/ram_radar_title.png" alt="" width="90%" />
      </div>
      <div className="content-container">
        <div className="mapbox">
          <div className="map">
            <Map />
          </div>
          <div className="month">enter month</div>
        </div>
        <div className="update">
          <img src="images/ram_status.png" alt="" width="200px" />
        </div>
      </div>
    </>
  )
}
