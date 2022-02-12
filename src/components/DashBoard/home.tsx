import { Homeprops } from '@components/interfaces/dashboardinterface'
import React from 'react'
import Navbar from './navbar'

const HomeComponent = (props: Homeprops) => {
  return (
    <>
      <div className="MainDash">
        <Navbar />
        <div className="MaindashRight">
          <div className="MainDashNavbar">
            <div className="MainDashNavbarCover">
              <div className="EmptyHeading">👋 Hi {props.username}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeComponent
