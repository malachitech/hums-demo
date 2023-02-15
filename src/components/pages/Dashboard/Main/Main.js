import React from 'react'
import Bpreading from '../Bpreading/bpreading'
import Note from '../Note/Note'
import DashboardNavbar from './DashboardNavbar'
import DrugRefill from './DrugRefiill/DrugRefill'
import Greeting from './Greeting/Greeting'
import './Main.css'
function Main({toggleSideBar, openSideBar}) {
  return (
    <div className='dashboardmain'>
        <DashboardNavbar toggleSideBar={toggleSideBar} openSideBar={openSideBar}/>

      <div className='mainGroup'>
        <div className='greeting'>
          <Greeting />

          <DrugRefill />
        </div>
        
        <div className='bpreadingSide'>
          <Bpreading />

          <Note />
        </div>
      </div>
        
    </div>
  )
}

export default Main