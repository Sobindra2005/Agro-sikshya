import React from 'react'
import Datas from './data'
const Region = () => {
  return (
    
    <>
    <div>
    <h1>Location-Based Crop Finder</h1>
                    <div>
                        <form >
                            <label htmlFor="province">Province</label>
                            {
            Datas.map((data)=>{
                return <>
                   <select name="province" id="province">
                    <option value="province">{data.province}</option>
                   </select>
             
                </>
            })
        }
                        </form>
                    </div>
       
    </div>
    </>
  )
}

export default Region