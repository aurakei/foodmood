import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div>
      <div className="topbarContainer">
          <div className="topbarWrapper">
              <div className="topLeft">
                  <span className="logo">Food Mood</span>
              </div>
              <div className="topbarCenter">
                  <div className="searchBar">
                      <span className="searchInput"></span>
                  </div>
              </div>
              <div className="topbarRight">
                  Profile
              </div>
          </div>
      </div>

    </div>
  )
}
