import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainDash from '../../components/MainDash'
import RightSide from '../../components/RightSide'

/**
 * DashboardPage Component
 * This is a "Page" component that assembles the main sections of the application.
 * Following the project requirements, we separate the layout logic into the Pages folder.
 */
const DashboardPage = () => {
  return (
    <div className="AppGlass">
      <Sidebar />
      <MainDash />
      <RightSide />
    </div>
  )
}

export default DashboardPage
