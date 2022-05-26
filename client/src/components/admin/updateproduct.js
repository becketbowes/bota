import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { EDIT_PRODUCT } from '../utils/mutations';
import { QUERY_PRODUCT } from '../utils/queries';

function UpdateProduct({id}) {
    const { data } = useQuery(QUERY_PRODUCT, { variables: { _id: id } });
    const product = data?.product || [];
    console.log('id: ', id, 'product: ', product);
    const [updatedProduct, { error }] = useMutation(EDIT_PRODUCT, { variables: { _id: id } });
    if (error) { console.log(error); };

    const [newProduct, setNewProduct] = useState({ sku:'', name:'', description:'', usdPrice:0, image:'', imageAlt:'', quantity:'' });

    const submitHandle = async (e) => {
        e.preventDefault();

        await updatedProduct({ variables: newProduct });

        alert(`The product: ${newProduct.name} has been updated`);
        setNewProduct({ sku:'', name:'', description:'', usdPrice:0, image:'', imageAlt:'', quantity:'' });
        window.location.reload(true);
    };

    const inputHandle = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]:e.target.value });
    };
    
    return (
        <>
            <form className="adminuItem">
                <div className="adminuSpace">•••</div>
                {/* <div className='adminufile'>
                    <label for='file' className='adminubutton'>Replace Product Image File:</label>
                    <input value={newProduct.img} type='file' name='img' onChange={inputHandle} className='adminubutton' placeholder='Drop Image Here' />
                </div> */}
                <textarea value={newProduct.title} type='title' name='title' onChange={inputHandle} className="adminuText" placeholder={product.name}></textarea>
                <textarea value={newProduct.description} type='description' name='description' onChange={inputHandle} className="adminuText" placeholder={product.description}></textarea>
                <textarea value={newProduct.sku} type='sku' name='sku' onChange={inputHandle} className="adminuText" placeholder={product.sku}></textarea>
                {/* temp for develop */}
                <textarea value={newProduct.image} type='image' name='image' onChange={inputHandle} className="adminuText" placeholder={product.image}></textarea>
                <textarea value={newProduct.imageAlt} type='imageAlt' onChange={inputHandle} name='imageAlt' className="adminuText" placeholder={product.imageAlt}></textarea>
                <textarea value={newProduct.usdPrice} type='usdPrice' onChange={inputHandle} name='usdPrice' className="adminuText" placeholder={product.usdPrice}></textarea>
                <textarea value={newProduct.quantity} type='quantity' onChange={inputHandle} name='quantity' className="adminuText" placeholder={product.quantity}></textarea>
                <button onClick={submitHandle} className="adminubutton">••• Update Product •••</button>
            </form>
        </>
    )
}

export default UpdateProduct;