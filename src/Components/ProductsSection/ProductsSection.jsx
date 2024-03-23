import { useEffect, useState } from "react"
import ProductsList from "../ProductsList/ProductsList"
import './ProductSection.css'

const ProductsSection=(props)=>{
    const {filterproducts} = props

    const [products, setProducts] = useState()

    async function fetchProducts(){
        try{
            const res = await fetch("https://fakestoreapi.com/products")
            const result = await res.json()
            setProducts(result)

        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchProducts()
    })

    console.log(products)

    return(
        <div className="product-section" style={!filterproducts ? {width: '100%'} : {}}>
            {
                products && products.length > 0 ?
                products.map((item)=><ProductsList productitem={item}/>) : ''
            }

        </div>
    )
}

export default ProductsSection