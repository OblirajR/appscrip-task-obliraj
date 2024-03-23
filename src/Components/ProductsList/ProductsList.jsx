import { useState } from 'react';
import './ProductsList.css'
import { CiHeart } from "react-icons/ci";

const ProductsList=(props)=>{
    const [heartcolor, setHeartColor] = useState(false)
    const {productitem}= props

    const handlecolor=()=>{
        setHeartColor(!heartcolor)
    }

    return(
        <div className="products-container">
            <img className="products-image" src={productitem.image} alt={productitem.title} />
 
                    <div className="products-title">{productitem.title}</div>
                    <div className="products-description">{productitem.description}</div>

                <CiHeart size={25} className='heart' onClick={handlecolor} color={heartcolor ? 'red' :''}/>

        </div>
    )
} 

export default ProductsList