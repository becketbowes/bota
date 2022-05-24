import { useState } from 'react';
import Adminu from './adminu';
import Messages from './messages';
import Blog from './blog';
import ViewProducts from './viewproducts';
import ViewReceipts from './viewreceipts';
import AddProduct from './addproduct';
import UpdateProduct from './updateproduct';
import RemoveProduct from './removeproduct';
import Theme from './theme';
import EditAbout from './editabout';
import EditVibe from './editvibe';
import ViewAdmins from './viewadmins';
import AddAdmins from './addadmins';
import EditAdmins from './editadmins';
import RemoveAdmins from './removeadmins';

function Admin() {
    const [content, setContent] = useState('adminu');
    const handleContent = (c) => setContent(c);
    
    const adminuDisplay = () => {
        if (content === 'messages') { return <Messages /> }
        if (content === 'blog') { return <Blog /> }
        if (content === 'viewproducts') { return <ViewProducts /> }
        if (content === 'viewreceipts') { return <ViewReceipts /> }
        if (content === 'addproduct') { return <AddProduct /> }
        if (content === 'updateproduct') { return <UpdateProduct /> }
        if (content === 'removeproduct') { return <RemoveProduct /> }
        if (content === 'theme') { return <Theme /> }
        if (content === 'editabout') { return <EditAbout /> }
        if (content === 'editvibe') { return <EditVibe /> }
        if (content === 'viewadmins') { return <ViewAdmins /> }
        if (content === 'addadmins') { return <AddAdmins /> }
        if (content === 'editadmins') { return <EditAdmins /> }
        if (content === 'removeadmins') { return <RemoveAdmins /> }
    }

    return (
        <section className='adminupop'>
            <Adminu content={content} handleContent={handleContent} />
            {adminuDisplay()}
            <button className="adminubutton" onClick={() => window.location.reload(false)}>••• logout •••</button>
        </section>
    );
}

export default Admin;
