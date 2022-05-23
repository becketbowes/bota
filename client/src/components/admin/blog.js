import React, { useState } from 'react';

function Blog() {
    const [text, setText] = useState('');
    const [image, setImage] = useState('');

    const inputHandle = (e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'text') {
            setText(inputValue);
        } else if (inputName === 'image') {
            setImage(inputValue);
        }
    };

    const submitHandle = (e) => {
        e.preventDefault();

        if (!text.length) {
            alert(`the internet is vapid enought without blank blog posts`);
            return;
        }

        //post to database

        alert(`new blog posted: ${text}`);
        setText('')
        setImage('')
    }
    //add drag and drop in here for images
    return (
        <>
            <form className="adminuItem">
                <div className="adminuSpace">•••</div>
                <div className='adminufile'>
                    <label for='file' className='adminubutton'>Add image file:</label>
                    <input value={image} type='file' name='image' onChange={inputHandle} className='adminubutton' placeholder='Drop Image Here' />
                </div>
                <textarea value={text} type='text' name='text' onChange={inputHandle} className="adminuText" placeholder="New Blog Post" />
                <button onClick={submitHandle} className="adminubutton">••• Post •••</button>
            </form>
        </>
    )
}

export default Blog;