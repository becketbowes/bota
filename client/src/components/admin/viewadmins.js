import { useState } from 'react';
import EditAdmins from './editadmins';
import RemoveAdmins from './removeadmins';

function ViewAdmins() {
    const [edit, setEdit] = useState(true);
    const [remove, setRemove] = useState(true);

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
                    {/* <button className='adminubutton' key='edit' id={admin.id} onClick={setEdit(!edit)}>••• Edit Admins •••</button>
                    <button className='adminubutton' key='remove' id={admin.id} onClick={setRemove(!remove)}>••• Edit Admins •••</button> */}
                    {/* { edit? <EditAdmins /> : null }
                    { remove? <RemoveAdmins /> : null } */}
                </article>
            ))}
        </>
    )
}

export default ViewAdmins;