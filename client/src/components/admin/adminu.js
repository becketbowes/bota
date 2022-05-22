function Adminu({content, handleContent}) {
        const adminPage = (e) => {
        handleContent(e.target.id);
    };

    if (content !== 'adminu') {
        return (
        <button className="adminubutton" onClick={() => handleContent('adminu')}>••• Main Adminu •••</button>
        );
    }
    return (
            <div onClick={(e) => adminPage(e)}>
                <h1>Social</h1>
                <button type='button' className='adminubutton' id='messages'>•••15 Messages!•••</button>
                <button type='button' className='adminubutton' id='blog'>•••  Blog Post  •••</button>
                <h1>Shop</h1>
                <button type='button' className='adminubutton' id='viewproducts'>•••View • Edit • Remove • Products•••</button>
                <button type='button' className='adminubutton' id='addproduct'>•••Add A Product•••</button>
                <button type='button' className='adminubutton' id='viewreceipts'>•••View Receipts•••</button>
                <h1>Vibe</h1>
                <button type='button' className='adminubutton' id='theme'>•••Toggle the Theme•••</button>
                <button type='button' className='adminubutton' id='editabout'>•••Edit About Page•••</button>
                <button type='button' className='adminubutton' id='editvibe'>•••Edit the Vibe•••</button>
                <h1>Peeps</h1>
                <button type='button' className='adminubutton' id='viewadmins'>•••View • Edit • Remove • Admins•••</button>
                <button type='button' className='adminubutton' id='addadmins'>•••Add Admins•••</button>
                <br></br><br></br>
            </div>
    );
}

export default Adminu;

    // const [text, setText] = useState('');

    // const inputHandle = (e) => {
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;

    //     if (inputType === 'text') {
    //         setText(inputValue);
    //     }
    // }

    // const neverSubmit = (e) => {
    //     e.preventDefault();
    //     //route here using text value, change alert below
    //     alert(text);
    //     setText('');
    // };