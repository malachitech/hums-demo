import React from 'react'
import HeroSection from '../../HeroSection';
import Navbar from '../../Navbar';
import {homeObjOne} from './Data'



function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection {...homeObjOne} />
        </div>
    )
}

export default Home;
