function RemoveProduct({id}) {
    const removeItem = (id) => { console.alert(`item ${id} has been wiped from the face of the earth!!!`)}

    return (
        <>
            <button className="adminubutton" onClick={() => removeItem('adminu')}>••! remove {id}? !••</button>
        </>
    )
}

export default RemoveProduct;