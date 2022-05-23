import { useState } from 'react';

function AddProduct() {
    const [title, setTitle] = useState('');
    const [sku, setSku] = useState('');
    const [img, setImg] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [usdPrice, setUsdPrice] = useState('');

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

        alert(`new product: ${title} has been added to database`);
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
                {/* change to drag and drop */}
                <div className='adminufile'>
                    <label for='file' className='adminubutton'>Add image file:</label>
                    <input value={img} type='file' name='img' onChange={inputHandle} className='adminubutton' placeholder='Drop Image Here' />
                </div>
                <input value={title} type='title' name='title' onChange={inputHandle} placeholder='Product Title' />
                <input value={sku} type='sku' name='sku' onChange={inputHandle} placeholder='Product SKU' />
                <input value={imageAlt} type='imageAlt' name='imageAlt' onChange={inputHandle} placeholder='Alternative text for image for the visually impaired'/>
                <input value={description} type='description' name='description' onChange={inputHandle} placeholder='Product Description'/>
                <input value={quantity} type='quantity' name='quantity' onChange={inputHandle} placeholder='Product Inventory - please enter unit numbers in digits only'/>
                <input value={usdPrice} type='usdPrice' name='usdPrice' onChange={inputHandle} placeholder='Product Cost - please enter value in USD value cents, with no periods or commas'/>
                <button onClick={submitHandle} className="adminubutton">••• Add Product •••</button>
            </form>
        </>
    )
}

export default AddProduct;