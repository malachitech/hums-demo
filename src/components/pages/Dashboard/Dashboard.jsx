import React, { useState } from 'react';
import Sidebar from '../../Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main/Main';
// import Search from '../../Search/search';

const Dashboard = () => {
    const [openSideBar, setOpenSidebar] = useState(false)
    const toggleSideBar = () => {
        setOpenSidebar(prev => !prev)
    }
    return (
        <Router>
            <div className="dashboard">
            {
                openSideBar && 
                <div className='sidebar'>
                    <Sidebar toggleSideBar={toggleSideBar} />
                </div>
            }
                
                
            <div className='dashboardmainGroup' style={openSideBar? {marginLeft: '20%'}: {marginLeft: '0px'}} >
                <Main toggleSideBar={toggleSideBar} openSideBar={openSideBar} />
            </div>
                
            </div>
        </Router>
  
    );
}

export default Dashboard;
