import { useState } from 'react';
import UpdateProduct from "./updateproduct";
import RemoveProduct from "./removeproduct";

function ViewProducts() {
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);

    const products = [
        {
            _id: "5899384yd",
            sku: "UGG-BB-PUR-06",
            name: "lipstick",
            description: "one full ounce of unicorn blood suspended in Donald Trump's latest liposuction lard",
            usdPrice: "100000",
            image: "lipstick.jpg",
            imageAlt: "sultry red lip gloss",
            quantity: 893
        },
        {
            _id: "2384892be",
            sku: "UGG-BB-PUL-09",
            name: "bota",
            description: "safeway brand peanut butter painstakingly cleansed of all trace of both peanuts and safeway",
            usdPrice: "900000",
            image: "bota.jpg",
            imageAlt: "bubububoooooota",
            quantity: 7524
        }
    ];

    
    return (
        <>
            {products.map((product) => (
                <article className="adminuItem">
                    <div className="adminuSpace">•••</div>
                    <div className="adminuTitle" key={product.name} value="Product Title">{product.name}</div>
                    <div className="adminuSmalltext" key={product.sku} value="Product SKU">{product.sku}</div>
                    <div className="adminuSmalltext" key={product.description} value="Product Description">{product.description}</div>
                    <div className="adminuSmalltext" key={product.quantity} value="Product Inventory">available units: {product.quantity}</div>
                    <div className="adminuSmalltext" key={product.usdPrice} value="Product Cost">price per unit in cents: {product.usdPrice}</div>
                    <button className="adminubutton" key="edit" id={product._id} onClick={() => setEdit(!edit)}>••• Edit Products •••</button>
                    <button className="adminubutton" key="delete" id={product._id} onClick={() => setRemove(!remove)}>••• Delete Products •••</button>
                    { edit? <UpdateProduct id={product._id} /> : null }
                    { remove? <RemoveProduct id={product._id} /> : null }
                </article>
            ))}

        </>
    )
}

export default ViewProducts;