import { useState } from 'react';

function AddProduct() {
    const [name, setName] = useState('');
    const [sku, setSku] = useState('');
    const [img, setImg] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [usdPrice, setUsdPrice] = useState('');

    const inputHandle = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;
        
        if (inputType === 'title') {
            setName(inputValue);
        } else if (inputType === 'sku') {
            setSku(inputValue);
        } else if (inputType === 'img') {
            setImg(inputValue);
        } else if (inputType === 'imageAlt') {
            setImageAlt(inputValue);
        } else if (inputType === 'description') {
            setDescription(inputValue);
        } else if (inputType === 'quantity') {
            setQuantity(inputValue);
        } else if (inputType === 'usdPrice') {
            setUsdPrice(inputValue);
        }
    };

    const submitHandle = (e) => {
        e.preventDefault();

        // add product to database

        alert(`new product: ${name} has been added to database`);
        setName('');
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
                <input value={name} name="name" onChange={inputHandle} type="name" className="adminuText" placeholder='Product Title' />
                <input value={sku} name="sku" onChange={inputHandle} type="sku" className="adminuText" placeholder='Product SKU' />
                {/* change to drag and drop */}
                <input value={img} onChange={inputHandle} type="img" className="adminuText" placeholder='Drop Image Here' />
                <input value={imageAlt} onChange={inputHandle} type="imageAlt" className="adminuText" placeholder='Alternative text for image for the visually impaired'/>
                <input value={description} onChange={inputHandle} type="description" className="adminuText" placeholder='Product Description'/>
                <input value={quantity} onChange={inputHandle} type="quantity" className="adminuText" placeholder='Product Inventory - please enter unit numbers in digits only'/>
                <input value={usdPrice} onChange={inputHandle} type="usdPrice" className="adminuText" placeholder='Product Cost - please enter value in USD value cents, with no periods or commas'/>
                <button onClick={submitHandle} className="adminubutton">••• Add Product •••</button>
            </form>
        </>
    )
}

export default AddProduct;