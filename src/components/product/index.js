import React from 'react';
import productimage from '../../assets/img/productimage.png'

function Product () {

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
            <img src={productimage} className="my-2" style={{ width: "40%", height: "700px" }} alt="cover" />   
            <h1 className="product-name"> bota body cream</h1> 
            <div>
                Add to Cart
            </div>
            </div>
           

        </div>
       
    )
};

export default Product;