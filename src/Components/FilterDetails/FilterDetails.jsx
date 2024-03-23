import { IoIosArrowDown } from "react-icons/io";
import Seperator from '../Seperator/Seperator'
import './FilterDetails.css'
import { useState } from "react";

const FilterDetails=(props)=>{

    const [displayfilter,setdisplayfilter]=useState(false)
    const {filterdetails}= props
    

    const handleClick=()=>{
        setdisplayfilter(!displayfilter)
    }

    return(
        <div>
             <div className='container-filter'>
                <div className='filter-main-section'>
                    <div className='filter-heading'>{filterdetails.filtername}</div>
                    <div className='down-arrow' onClick={()=>handleClick()}><IoIosArrowDown/></div>
                </div>
                <div>All</div>
                {
                    displayfilter && 
                    <div className='minimise-section'>
                    <div className='unselect'>Unselect all</div>
                    <div>
                        <input type='checkbox' /><span>Men</span>
                    </div>
                    <div>
                        <input type='checkbox' /><span>Women</span>
                    </div>
                    <div>
                        <input type='checkbox' /><span>Baby & Kids</span>
                    </div>
                </div>
                }
            </div>
            <Seperator className="seperator"/>
        </div>
    )
}

export default FilterDetails