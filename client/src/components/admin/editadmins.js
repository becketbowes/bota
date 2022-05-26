import { useState } from 'react';

function EditAdmins({ id }) {
    // replace with get product by id call from betwixt the parentheses in main function, coming from viewproducts page
    const admin = {
        _id: "238498xi",
        username: "employeeFred",
        email: "fred@butterboy.edu"
    };

    const [username, setUsername] = useState(admin.username);
    const [email, setEmail] = useState(admin.email);

    const inputHandle = (e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'username') {
            setUsername(inputValue);
        } else if (inputName === 'email') {
            setEmail(inputValue);
        }
    };

    const submitHandle = (e) => {
        e.preventDefault();

        //update to database

        alert(`${username} has been updated`)
        setUsername('');
        setEmail('');
    }

    return (
        <>
            <article className="adminuItem">
                <div className="adminuSpace">•••</div>
                <textarea value={username} type='username' name='username' onChange={inputHandle} className='adminuText' placeholder={admin.username}></textarea>
                <textarea value={email} type='email' name='email' onChange={inputHandle} className='adminuText' placeholder={admin.email}></textarea>
                <button onClick={submitHandle} className="adminubutton">••• Update Admin •••</button>
            </article>
        </>
    )
}

export default EditAdmins;