import React from 'react'
import Map from './Map'

export default function Home(props) {
  return (
    <>
      <div className="header">
        <div id="radar-box">
          <img id="radar" src="images/radar_red.gif" alt="" />
          <img id="radarBed" src="images/radar_bed.png" alt="" />
        </div>
        <img id="banner" src="images/ram_radar_title.png" alt="" />
      </div>
      <div className="content-container">
        <div className="mapbox">
          <div className="map">
            <Map month={props.month} />
          </div>
        </div>
        <div className="update">
          <img src="images/ram_status_no_light.png" alt="" width="300px" />
          <img id="redbutton" src="images/redbutton.gif" alt="" width="100px" />
          <h2>Recent Raid activiy:</h2>
          <ul>
            <li>Loot: x70 vanilla ice vape juice</li>
            <br />
            <li>Plate: RDNDTY</li>
            <br />
            <li>latitude: -36.87104</li>
            <br />
            <li>Longitude: 174.75261</li>
            <br />
            <li>Month: October</li>
            <br />
          </ul>
        </div>
      </div>
    </>
  )
}
