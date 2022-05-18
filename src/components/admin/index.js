import { useState } from 'react';

function Admin() {
    const [text, setText] = useState('');

    const inputHandle = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'text') {
            setText(inputValue);
        }
    }

    const neverSubmit = (e) => {
        e.preventDefault();
        //route here using text value, change alert below
        alert(text);
        setText('');
    };

    return (
        <navigation className='adminupop'>
            <h1>Check the Shop</h1>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••View Products•••</button>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••View Inventory•••</button>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••View Receipts•••</button>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••Add A Product•••</button>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••Update a Product•••</button>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••Remove a Product•••</button>
            <h1>Check the Vibe</h1>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••Toggle the Theme•••</button>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••Edit About Page•••</button>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••Edit the Vibe•••</button>
            <h1>Check the Peeps</h1>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••View Admins•••</button>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••Add Admins•••</button>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••Edit Admins•••</button>
            <button type='button' className='adminubutton' onClick={neverSubmit}>•••Remove Admins•••</button>
            <br></br><br></br>
        </navigation>
    );
}

export default Admin;
