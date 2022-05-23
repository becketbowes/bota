import React from 'react';
import productimage from '../../assets/img/P1000210.jpg';
import productimage2 from '../../assets/img/P1000186.jpg'
import productimage3 from '../../assets/img/P1000171.jpg'
import productimage4 from '../../assets/img/P1000229.jpg'

function Product () {

    const handleSubmit= (e) => {
        e.preventDefault();

        console.log("You clicked me!")

        
    }

    return (
        <div className="product">
            <div className="product-title">
                <h1>CIRCULAR</h1>
                <h1>COSMETICS</h1>
                <h1>FOR</h1>
                <h1>BODY</h1>
                <h1>&</h1>
                <h1>PLANET HEALTH</h1>
            </div>
            <div className="product-item">
            <img src={productimage} className="my-2" style={{ width: "50%", height: "auto" }} alt="cover" />   
    
            <h1 className="product-name1"> body  ____</h1> 
            <h1 className="product-name2"> cream</h1> 
            <br>
            
            </br>
         
            </div>
            <div className="product-item">
            <img src={productimage2} className="my-2" style={{ width: "50%", height: "auto" }} alt="cover" />   
    
            <h1 className="product-item1"> guidance</h1> 
            <p className="product-item2"> gently warm up in the palm of your hands, glide softly into skin and massage to your hearts content</p> 
            <br></br>
           
            </div>
            <div className="product-item">
            <img src={productimage3} className="my-2" style={{ width: "50%", height: "auto" }} alt="cover" />   
    
            <h1 className="product-item1"> ingredients</h1> 
            <p className="product-item2"> macadamia seed oil, castor seed oil, sunflower oil, vetiver root, cedarwood oil, grapefruit peel oil, bergamot fruit oil, vanilla bean extract</p> 
            <br></br>
           
            </div>
            <div className="product-item">
            <img src={productimage4} className="my-2" style={{ width: "50%", height: "auto" }} alt="cover" />   

            <br></br>
    
            <button className='addtocart' data-testid="button" onClick={handleSubmit} type="submit">
            <h1 className="product-item1"> ADD TO CART</h1> 
            </button>
            <p className="product-item2"> $45 USD </p> 
            
           
            </div>
            
            
          
        

        </div>
    
    )
};

export default Product;