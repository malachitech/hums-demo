import React from 'react';
import './search.css'
import Logo from '../../img/1.png'
import { FcSettings } from "react-icons/fc";
import { BsBellFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCaretDown } from "react-icons/ai";

const Search = ({toggleSideBar }) => {
    return (
        <div className="searchBar">
        {/*  */}
            <div className='openSidebarBtn'>
                <GiHamburgerMenu onClick={toggleSideBar} />
            </div>
            <div className="header-search">
               <input type='search' placeholder='Search'/>
            </div> 
            <div className="header-avatar">
                <div className='dashboardNavIcons'>
                    <div>
                        <FcSettings />
                    </div>
                    
                    <div>
                        <BsBellFill />
                    </div>
                    
                </div>
                
                <img src={Logo} alt='Avatar' className="avatar rounded-circle"/>
                <strong>Alaba Jammal <AiOutlineCaretDown /></strong>
            </div>
        
         
        </div>
    );
}

export default Search;
