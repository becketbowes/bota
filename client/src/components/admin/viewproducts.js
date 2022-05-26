import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import UpdateProduct from "./updateproduct";
import RemoveProduct from "./removeproduct";

function ViewProduct() {
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);

    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
    const products = data?.products || [];
    console.log('loading:', loading, 'products:', products);
        
    return (
        <>
            {products.length && products.map((product) => (
                <article className="adminuItem">
                    <div className="adminuSpace">•••</div>
                    <div className="adminuTitle" key={product.name} value="Product Title">{product.name}</div>
                    <div className="adminuSmalltext" key={product.sku} value="Product SKU">{product.sku}</div>
                    <div className="adminuSmalltext" key={product.description} value="Product Description">{product.description}</div>
                    <div className="adminuSmalltext" key={product.quantity} value="Product Inventory">available units: {product.quantity}</div>
                    <div className="adminuSmalltext" key={product.usdPrice} value="Product Cost">price per unit in cents: {product.usdPrice}</div>
                    <button className="adminubutton" key="edit" id={product._id} onClick={() => setEdit(!edit)}>••• Edit Product •••</button>
                    <button className="adminubutton" key="delete" id={product._id} onClick={() => setRemove(!remove)}>••• Delete Product •••</button>
                    { edit? <UpdateProduct id={product._id} /> : null }
                    { remove? <RemoveProduct id={product._id} /> : null }
                </article>
            ))}

        </>
    )
}

export default ViewProduct;