import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { UPDATE_PRODUCT } from '../utils/mutations';

function UpdateProduct({id}) {
    // replace with get product by id call from betwixt the parentheses in main function, coming from viewproducts page
    const product = {
        id: id,
        title: "lipstick",
        sku: "UGG-BB-PUR-06",
        image: "lipstick.jpg",
        imageAlt: "a picture of our lipstick",
        description: "one full ounce of unicorn blood suspended in Donald Trump's latest liposuction lard",
        quantity: 2254,
        usdPrice: 100000,    
    };

    // const [title, setTitle] = useState(product.title);
    // const [sku, setSku] = useState(product.sku);
    // const [img, setImg] = useState(product.image);
    // const [imageAlt, setImageAlt] = useState(product.imageAlt);
    // const [description, setDescription] = useState(product.description);
    // const [quantity, setQuantity] = useState(product.quantity);
    // const [usdPrice, setUsdPrice] = useState(product.usdPrice);

    const [title, setTitle] = useState('product.title');
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

        // add product to database

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
                <textarea value={title} type='title' name='title' onChange={inputHandle} className="adminuText" placeholder={product.title}></textarea>
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