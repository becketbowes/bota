function RemoveAdmins(id) {
    const removeAdmin = (id) => { alert(`admin ${id} is nobody to us!!!`)}

    return (
        <>
            <button className="adminubutton" onClick={() => removeAdmin(id)}>••! remove {id}? !••</button>
        </>
    )
}

export default RemoveAdmins;