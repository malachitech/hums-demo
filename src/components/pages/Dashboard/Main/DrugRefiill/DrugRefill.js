import React from 'react'
import './DrugRefill.css'

function DrugRefill() {
  return (
    <div className='drugrefill'>
    <h2>
       Drug Refill 
    </h2>

        <div style={{overflowX: "auto"}}>
        <table>
            
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Date</td>
                    <td>Time</td>
                    <td>Status</td>
                </tr>
                
            </thead>

            <tbody>
            <tr>
                <td>Devrim</td>
                <td>Demir</td>
                <td>devrim1demir@gmail.com</td>
                <td>
                    Good
                </td>
            </tr>

            <tr>
                <td>Enes</td>
                <td>Pehlivan</td>
                <td>enesphlvn@gmail.com</td>
                <td>
                    Good
                </td>
            </tr>

            <tr>
                <td>Osman</td>
                <td>Gültekin</td>
                <td>osmangul@gmail.com</td>
                <td>
                Good
                </td>
            </tr>
            </tbody>
            

        </table>
        </div>
        
    </div>
  )
}

export default DrugRefill