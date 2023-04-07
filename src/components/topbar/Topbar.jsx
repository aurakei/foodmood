import React from 'react'
import "./topbar.css"
import {SearchOutlined} from "@ant-design/icons"

export default function Topbar() {
  return (
    <div>
      <div className="topbarContainer">
          <div className="topbarWrapper">
              <div className="topLeft">
                  <span className="logo">Food Mood</span>
              </div>
              
              <div className="topbarRight">
                  Profile
              </div>
          </div>
      </div>

    </div>
  )
}
