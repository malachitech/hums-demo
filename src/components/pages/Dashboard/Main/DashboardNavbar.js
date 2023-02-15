import React from 'react'
import Search from '../../../Search/search'

function DashboardNavbar({toggleSideBar, openSideBar}) {
  return (
    <div style={{marginTop: "10px"}}>
        <Search toggleSideBar={toggleSideBar} openSideBar={openSideBar} />
    </div>
  )
}

export default DashboardNavbar