import FilterDetails from '../FilterDetails/FilterDetails';
import Seperator from '../Seperator/Seperator'
import './FilterSection.css'

const FilterSection=()=>{

    const filterDetails= [{
        filtername:"IDEAL FOR",
        filtershow: false
    },
    {
        filtername:"OCCASION",
        filtershow: false
    },
    {
        filtername:"WORK",
        filtershow: false
    },
    {
        filtername:"FABRIC",
        filtershow: false
    },
    {
        filtername:"SEGMENT",
        filtershow: false
    },
    {
        filtername:"SUITABLE FOR",
        filtershow: false
    },
    {
        filtername:"RAW MATERIALS",
        filtershow: false
    },
    {
        filtername:"PATTERN",
        filtershow: false
    }
    ]
    return(
        <div className='filter-section'>
            <input type='checkbox'/><span className='customizable'>CUSTOMIZABLE</span>
            <Seperator/>
            {
                filterDetails && filterDetails.map((item)=><FilterDetails filterdetails={item}/>)
            }
            
        </div>
    )
}

export default FilterSection 