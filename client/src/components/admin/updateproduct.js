function UpdateProduct() {
    // replace with get product by id call from betwixt the parentheses in main function, coming from viewproducts page
    const product = {
        title: "lipstick",
        image: "lipstick.jpg",
        imageAlt: "a picture of our lipstick",
        description: "one full ounce of unicorn blood suspended in Donald Trump's latest liposuction lard",
        cost: "100000",
        sku: "UGG-BB-PUR-06"
    };
    
    return (
        <>
            <article className="adminuItem">
                <div className="adminuSpace">•••</div>
                <textarea className="adminuText" defaultValue={product.title}></textarea>
                <textarea className="adminuText" defaultValue={product.sku}></textarea>
                <textarea className="adminuText" defaultValue={product.image}></textarea>
                <textarea className="adminuText" defaultValue={product.imageAlt}></textarea>
                <textarea className="adminuText" defaultValue={product.cost}></textarea>
                <textarea className="adminuText" defaultValue={product.description}></textarea>
                <button className="adminubutton">••• Update Product •••</button>
            </article>
        </>
    )
}

export default UpdateProduct;