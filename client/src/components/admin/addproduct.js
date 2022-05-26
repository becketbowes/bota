import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../utils/mutations';

function AddProduct() {
    const [product, setProduct] = useState({ sku:'', name:'', description:'', usdPrice: '', img:'', imageAlt:'', quantity:'' });
    // const [error, setError] = useState('');
    const [addProduct] = useMutation(ADD_PRODUCT);

    const submitHandle = async (e) => {
        e.preventDefault();
        
        console.table('pre send', product); 
        await addProduct({ variables: product });
        // if (product.sku && product.name && product.description && product.usdPrice && product.image && product.imageAlt && product.quantity) {
        //     console.log('product: ', product);
        //     await addProduct({ variables: product });
        // } else {
        //     setError(`please fill out all fields before making new product`);
        //     alert(error);
        //     return;
        // };
        console.table('post send', product); 

        alert(`product ${product.name} added`);
        setProduct({ sku:'', name:'', description:'', usdPrice:'', img:'', imageAlt:'', quantity:'' });   
        window.location.reload(true); 
    };

    const inputHandle = (e) => {
        setProduct({ ...product, [e.target.name]:e.target.value }); 
    };

    return (
        <>
            <form className="adminuItem">
                <div className="adminuSpace">•••</div>
                {/* <div className='adminufile'>
                    <label for='file' className='adminubutton'>Product Image File:</label>
                    <input value={product.image} type='file' name='image' onChange={inputHandle} className='adminubutton' placeholder='Drop Image Here' />
                </div> */}
                <input defaultValue={product.name} name="name" onChange={inputHandle} type="name" placeholder='Product Title' />
                <input defaultValue={product.sku} name="sku" onChange={inputHandle} type="sku" placeholder='Product SKU' />
                {/* temp filename for develop */}
                <input defaultValue={product.img} name="img" onChange={inputHandle} type="img"  placeholder='Alternative text for image for the visually impaired'/>
                <input defaultValue={product.imageAlt} name="imageAlt" onChange={inputHandle} type="imageAlt"  placeholder='Alternative text for image for the visually impaired'/>
                <input defaultValue={product.description} name="description" onChange={inputHandle} type="description" placeholder='Product Description'/>
                <input defaultValue={product.quantity} name="quantity" onChange={inputHandle} type="quantity" placeholder='Product Inventory - please enter unit numbers in digits only'/>
                <input defaultValue={product.usdPrice} name="usdPrice" onChange={inputHandle} type="usdPrice" placeholder='Product Cost - please enter value in USD value cents, with no periods or commas'/>
                <button onClick={submitHandle} className="adminubutton">••• Add Product •••</button>
            </form>
        </>
    )
}

export default AddProduct;