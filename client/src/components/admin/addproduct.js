import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../utils/mutations'

function AddProduct() {
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [usdPrice, setUsdPrice] = useState('');
    const [addProduct] = useMutation(ADD_PRODUCT)

    const inputHandle = (e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;
        
        if (inputName === 'name') {
            setName(inputValue);
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

    const submitHandle = async (e) => {
        e.preventDefault();

        try {
            const mutationResponse = await addProduct({
                variables: {
                    sku: sku.sku,
                    name: name.name,
                    description: description.description,
                    usdPrice: usdPrice.usdPrice,
                    image: img.img,
                    imageAlt: imageAlt.imageAlt,
                    quantity: quantity.quantity
                }
            })
            mutationResponse()
        } catch (err) {
            console.log(err)
        }

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

                <input value={name} name="name" onChange={inputHandle} type="name" placeholder='Product Title' />

                <input value={sku} name="sku" onChange={inputHandle} type="sku" placeholder='Product SKU' />

                {/* change to drag and drop */}

                <input value={img} name="img" onChange={inputHandle} type="img" placeholder='Drop Image Here' />

                <input value={imageAlt} name="imageAlt" onChange={inputHandle} type="imageAlt"  placeholder='Alternative text for image for the visually impaired'/>

                <input value={description} name="description" onChange={inputHandle} type="description" placeholder='Product Description'/>

                <input value={quantity} name="quantity" onChange={inputHandle} type="quantity" placeholder='Product Inventory - please enter unit numbers in digits only'/>

                <input value={usdPrice} name="usdPrice" onChange={inputHandle} type="usdPrice" placeholder='Product Cost - please enter value in USD value cents, with no periods or commas'/>

                <button onClick={submitHandle} className="adminubutton">••• Add Product •••</button>
            </form>
        </>
    )
}

export default AddProduct;

