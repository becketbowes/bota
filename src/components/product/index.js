import React from 'react';
import botalogoclear from '../../assets/img/botalogoclear.png'

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

            <img src={botalogoclear} className="my-2" style={{ width: "40%", height: "700px" }} alt="cover" />   

            <h1> bota body cream</h1>     
        </div>
       
    )
};

export default Product;