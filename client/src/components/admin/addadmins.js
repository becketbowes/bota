import { useState } from 'react';

function AddAdmins() {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputHandle = (e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'firstName') {
            setFirstname(inputValue);
        } else if (inputName === 'lastName') {
            setLastname(inputValue);
        } else if (inputName === 'email') {
            setEmail(inputValue);
        } else if (inputName === 'password') {
            setPassword(inputValue);
        }
    };

    const submitHandle = (e) => {
        e.preventDefault();

        // add to database

        alert(`${firstName} ${lastName} has been added as a new admin.`)
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
    }



    return (
        <>
            <form className='adminuItem'>
                <div className='adminuSpace'>•••</div>
                <input value={firstName} type='firstName' name='firstName' onChange={inputHandle} placeholder='First Name' />
                <input value={lastName} type='lastName' name='lastName' onChange={inputHandle} placeholder='Last Name' />
                <input value={email} type='email' name='email' onChange={inputHandle} placeholder='Email' />
                <input value={password} type='password' name='password' onChange={inputHandle} placeholder='Password' />    
                <button onClick={submitHandle} className='adminubutton'>••• Add New Admin •••</button>
            </form> 
        </>
    )
}

export default AddAdmins;