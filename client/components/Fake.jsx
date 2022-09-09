import React from 'react'

export default function Fake() {
  return (
    <>
      <div className="header">
        <img src="images/ram_radar_title.png" alt="" width="90%" />
      </div>
      <div className="content-container">
        <div className="mapbox">
          <div className="map">
            <p>map</p>
          </div>
          <div className="month">enter month</div>
        </div>
        <div className="update">
          <img src="images/ram_status.png" alt="" width="300px" />
        </div>
      </div>
    </>
  )
}
