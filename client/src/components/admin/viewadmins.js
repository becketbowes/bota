import { useState } from 'react';
import EditAdmins from './editadmins';
import RemoveAdmins from './removeadmins';

function ViewAdmins() {
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);

    const admins = [
        {
            _id: "234234me",
            username: "chinny",
            email: "chinny@aol.com"
        },
        {
            _id: "238498xi",
            username: "employeeFred",
            email: "fred@butterboy.edu"
        }
    ];

    return (
        <>
            {admins.map((admin) => (
                <article className='adminuItem'>
                    <div className='adminuSpace'>•••</div>
                    <div className='adminuTitle' key={admin.username} value='username'>{admin.username}</div>
                    <div className='adminuSmalltext' key={admin._id} value='id'>{admin._id}</div>
                    <div className='adminuSmalltext' key={admin.email} value='email'>{admin.email}</div>
                    <button className='adminubutton' onClick={() => setEdit(!edit)}>••• Edit Admins •••</button>
                    <button className='adminubutton' onClick={() => setRemove(!remove)}>••• Remove Admins •••</button>
                    { edit? <EditAdmins id={admin.id} /> : null }
                    { remove? <RemoveAdmins id={admin._id} /> : null }
                </article>
            ))}
        </>
    )
}

export default ViewAdmins;