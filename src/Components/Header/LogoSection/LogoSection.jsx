import { IoLogoReact } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import './LogoSection.css'
import Seperator from "../../Seperator/Seperator";

const LogoSection=()=>{
    return(
        <div className="LogoSection-container">
            <div className="Logo-section">
                <div style={{width:'100px'}}>
                    <IoLogoReact size={30}/>
                </div>
                <h1>LOGO</h1> 
                <div className="Icons-container">
                    <BiSearch size={20}/>
                    <CiHeart size={20}/>
                    <SlHandbag size={20}/>
                    <IoPersonOutline size={20}/>
                    <select>
                        <option>ENG</option>
                        <option>FRE</option>
                    </select>
                </div>
            </div>
            <div className="tab-container">
                <h4>Shop</h4>
                <h4>Skills</h4>
                <h4>Stories</h4> 
                <h4>About</h4>
                <h4>Contact us</h4>
            </div>
            <Seperator/>
        </div>
    )
}

export default LogoSection