import React from 'react'
import Logo from '../../../../img/1.png'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import './bpreading.css'

function Bpreading() {
  return (
    <div className='bpreading'>
    <h2>
        Bp Reading
    </h2>

    <div className='bpreadingGroupList'>
       
        <div className='bpreadingGroup'>
            <div className='bpreadingname'>
                <img src={Logo} alt="logo" className='bpreadingImg' />
                <p>
                    Name
                </p>

            </div>
           
            <p  className='bpreadingrate'>
                153 <AiOutlineArrowDown style={{color: "red"}} />
            </p>
        </div>

        <div className='bpreadingGroup'>
            <div className='bpreadingname'>
                <img src={Logo} alt="logo" className='bpreadingImg' />
                <p>
                    Name
                </p>

            </div>
           
            <p  className='bpreadingrate'>
                153 <AiOutlineArrowUp style={{color: "green"}} />
            </p>
        </div>


        <div className='bpreadingGroup'>
            <div className='bpreadingname'>
                <img src={Logo} alt="logo" className='bpreadingImg' />
                <p>
                    Name
                </p>

            </div>
           
            <p  className='bpreadingrate'>
                153 <AiOutlineArrowDown style={{color: "red"}} />
            </p>
        </div>
            
        
    </div>

    </div>
  )
}

export default Bpreading