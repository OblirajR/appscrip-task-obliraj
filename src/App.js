import { useState } from 'react';
import './App.css';
import Description from './Components/Description/Description';
import DetailsSection from './Components/DetailsSection/DetailsSection';
import FilterSection from './Components/FilterSection/FilterSection';
import Header from './Components/Header/Header';
import ProductsSection from './Components/ProductsSection/ProductsSection';
import Footer from './Components/Footer/Footer';

function App() {

  const [propsData, setpropsData]= useState(true)
  
  const handleDataFromChild=(data)=>{
    setpropsData(data)
  }

  console.log(propsData)
  return (
    <div className="App">
      <Header/>
      <Description/>
      <DetailsSection sendDataToParent={handleDataFromChild}/>
      <div className='mid-section'>
        {
          propsData ? <FilterSection/> :''
        }
        <ProductsSection filterproducts={propsData}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
