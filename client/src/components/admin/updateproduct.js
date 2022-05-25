import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { EDIT_PRODUCT } from '../utils/mutations';
import { QUERY_PRODUCT } from '../utils/queries';

function UpdateProduct({id}) {
    const { data } = useQuery(QUERY_PRODUCT, { variables: { _id: id } });
    const product = data?.product || [];
    console.log('id: ', id)
    console.log('product: ', product);
    const [updatedProduct, { error }] = useMutation(EDIT_PRODUCT, { variables: { _id: id } });
    if (error) { console.log(error); };

    const [title, setTitle] = useState(product.name);
    const [sku, setSku] = useState(product.sku);
    const [img, setImg] = useState(product.img);
    const [imageAlt, setImageAlt] = useState(product.imageAlt);
    const [description, setDescription] = useState(product.description);
    const [quantity, setQuantity] = useState(product.quantity);
    const [usdPrice, setUsdPrice] = useState(product.usdPrice);

    const inputHandle = (e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;
        
        if (inputName === 'title') {
            setTitle(inputValue);
        } else if (inputName === 'sku') {
            setSku(inputValue);
        } else if (inputName === 'img') {
            setImg(inputValue);
        } else if (inputName === 'imageAlt') {
            setImageAlt(inputValue);
        } else if (inputName === 'description') {
            setDescription(inputValue);
        } else if (inputName === 'quantity') {
            setQuantity(inputValue);
        } else if (inputName === 'usdPrice') {
            setUsdPrice(inputValue);
        }
    };

    const submitHandle = (e) => {
        e.preventDefault();
        console.log('new title: ', title);
        console.log('product name sku image imageAlt description quantity usdPrice', title, sku, img, imageAlt, description, quantity, usdPrice)

        try {
            const newData = new updatedProduct({ 
                product: {
                name: title,
                sku: sku,
                image: img,
                imageAlt: imageAlt,
                description: description,
                quantity: quantity,
                usdPrice: usdPrice
                }
            });
            console.log('newData: ', newData)
        } 
        catch(err) { console.log(err) };
        
        alert(`The product: ${title} has been updated`);
        setTitle('');
        setSku('');
        setImg('');
        setImageAlt('');
        setDescription('');
        setQuantity('');
        setUsdPrice('');
    };
    
    return (
        <>
            <form className="adminuItem">
                <div className="adminuSpace">•••</div>
                <div className='adminufile'>
                    <label for='file' className='adminubutton'>Replace Product Image File:</label>
                    <input value={img} type='file' name='img' onChange={inputHandle} className='adminubutton' placeholder='Drop Image Here' />
                </div>
                <textarea value={title} type='title' name='title' onChange={inputHandle} className="adminuText" defaultValue={product.name}></textarea>
                <textarea value={description} type='description' name='description' onChange={inputHandle} className="adminuText" placeholder={product.description}></textarea>
                <textarea value={sku} type='sku' name='sku' onChange={inputHandle} className="adminuText" placeholder={product.sku}></textarea>
                <textarea value={imageAlt} type='imageAlt' onChange={inputHandle} name='imageAlt' className="adminuText" placeholder={product.imageAlt}></textarea>
                <textarea value={usdPrice} type='usdPrice' onChange={inputHandle} name='usdPrice' className="adminuText" placeholder={product.usdPrice}></textarea>
                <textarea value={quantity} type='quantity' onChange={inputHandle} name='quantity' className="adminuText" placeholder={product.quantity}></textarea>
                <button onClick={submitHandle} className="adminubutton">••• Update Product •••</button>
            </form>
        </>
    )
}

export default UpdateProduct;