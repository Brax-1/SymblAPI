import React from 'react'
import Navbar from './navbar'
import { Settings } from '@material-ui/icons'
const SettingComponent = () => {
  return (
    <>
      <div className="MainDash">
        <Navbar />
        <div className="MaindashRight">
          <div className="MainDashNavbar">
            <div className="MainDashNavbarCover">
              <div className="EmptyHeading">
                <Settings />
                &nbsp; Settings
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingComponent
