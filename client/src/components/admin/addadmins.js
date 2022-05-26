import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'

function AddAdmins() {
    const [admin, setAdmin] = useState({ firstName:'', lastName:'', email:'', password:'', admin:true });
    const [addUser] = useMutation(ADD_USER);

    const submitHandle = async (e) => {
        e.preventDefault();

        await addUser({ variables: admin })
        console.log(admin);

        alert(`${admin.firstName} ${admin.lastName} has been added as a new admin.`)
        setAdmin('');
    }

    const inputHandle = (e) => {
        setAdmin({ ...admin, [e.target.name]:e.target.value });
    };

    return (
        <>
            <form className='adminuItem'>
                <div className='adminuSpace'>•••</div>
                <input value={admin.firstName} type='firstName' name='firstName' onChange={inputHandle} placeholder='First Name' />
                <input value={admin.lastName} type='lastName' name='lastName' onChange={inputHandle} placeholder='Last Name' />
                <input value={admin.email} type='email' name='email' onChange={inputHandle} placeholder='Email' />
                <input value={admin.password} type='password' name='password' onChange={inputHandle} placeholder='Password' />    
                <button onClick={submitHandle} className='adminubutton'>••• Add New Admin •••</button>
            </form> 
        </>
    )
}

export default AddAdmins;