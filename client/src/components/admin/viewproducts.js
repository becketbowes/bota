import UpdateProduct from './updateproduct';
import RemoveProduct from './removeproduct';

function ViewProducts() {
    const editDisplay = (editType, id) => {
        console.log(editType, id);
        if (editType === "delete") {
            return <RemoveProduct id={id} />
        }
        if (editType === "update") {
            return <UpdateProduct id={id} />
        } else {
            return;
        };
    };

    // replace with route:
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
            <div>
                {editDisplay() && (
                    <div>{editDisplay}</div>
                )}
            </div>
            {products.map((product) => (
                <article className="adminuItem">
                    <div className="adminuSpace">•••</div>
                    <div className="adminuTitle" value="Product Title">{product.name}</div>
                    <div className="adminuSmalltext" value="Product SKU">{product.sku}</div>
                    <div className="adminuSmalltext" value="Product Description">{product.description}</div>
                    <div className="adminuSmalltext" value="Product Inventory">available units: {product.quantity}</div>
                    <div className="adminuSmalltext" value="Product Cost">price per unit in cents: {product.usdPrice}</div>
                    <button className="adminubutton" id={product._id} onClick={() => editDisplay("update", product._id)}>••• Edit Product •••</button>
                    <button className="adminubutton" id={product._id} onClick={() => editDisplay("delete", product._id)}>••• Delete Product •••</button>
                </article>
            ))}
        </>
    )
}

export default ViewProducts;