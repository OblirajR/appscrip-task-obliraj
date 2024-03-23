import { useState } from 'react'
import Seperator from '../Seperator/Seperator'
import './DetailsSection.css'

const DetailsSection=({sendDataToParent})=>{
    const [handlingFilter,setHandlingFilter] = useState(false)

    const handleFilter=()=>{
        setHandlingFilter(!handlingFilter)
        if(typeof sendDataToParent === 'function'){
            sendDataToParent(handlingFilter)
        }
    }

    return(
        <div>
            <Seperator/>
            <div className="Details-container">
                <h4 className='items-count'>3425 Items</h4>
                <div className='Filter-selection'> &lt; 
                    <span onClick={()=>handleFilter()}>
                        {handlingFilter ? 'SHOW FILTER' : "HIDE FILTER"}
                    </span>
                </div>
                <div className='mobile-section' onClick={()=>handleFilter()}>FILTER</div>
                <div className='options'> 
                    <select>
                        <option>RECOMMENDED</option>
                        <option>Newest First</option>
                        <option>Popular</option>
                        <option>Price: high to low</option>
                        <option>Price: low to high</option>
                    </select>
                </div>
            </div>
            <Seperator/>
        </div>
    )
}

export default DetailsSection