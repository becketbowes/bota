function EditAdmins({ handleContent }) {
    // replace with get product by id call from betwixt the parentheses in main function, coming from viewproducts page
    const admin = {
        _id: "238498xi",
        username: "employeeFred",
        email: "fred@butterboy.edu"
    };

    return (
        <>
            <article className="adminuItem">
                <div className="adminuSpace">•••</div>
                <textarea defaultValue={admin.username}></textarea>
                <textarea defaultValue={admin.email}></textarea>
                <button className="adminubutton">••• Update Product •••</button>
            </article>
        </>
    )
}

export default EditAdmins;