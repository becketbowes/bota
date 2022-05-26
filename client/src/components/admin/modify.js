import { useState } from 'react';

function Modify() {
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
    }

    const noSubmit = '••• modify •••'

    return (
        <navigation className='adminupop'>
            <textarea value={text} name='text' onChange={inputHandle} type='text' placeholder='change text' className='adminuItem' />
            <button type='button' className='adminubutton' onClick={neverSubmit}>{noSubmit}</button>
        </navigation>
    );
}

export default Modify;