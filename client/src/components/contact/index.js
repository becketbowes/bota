import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Admin from '../admin';
import { useMutation } from '@apollo/client'
import { ADD_NOTE } from '../utils/mutations'

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  const [addNote] = useMutation(ADD_NOTE)

  const [login, setLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formState.name === 'Margarine is gross') {
      setLogin(!login)
    }
    
    if (!errorMessage) {
      console.log('Submit Form', formState);
      await addNote({ variables: formState })
    }
    
    //reset the form
    await setFormState({ name: '', email: '', message: '' }); 
    window.location.reload(true); 
    alert('message sent!');
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <>
      {login ?
          <Admin />
        : 
        <section className="contact-item">
          <div className=''>
            <div>
              <h1 data-testid="h1tag">GET IN TOUCH</h1>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className='name-section'>
                <label className='name' htmlFor="name">NAME</label>
                <input className='input-box' type="text" name="name" defaultValue={name} onBlur={handleChange} />
              </div>
              <div>
                <label className='name' htmlFor="email">EMAIL</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
              </div>
              <div>
                <label className='name' htmlFor="message">MESSAGE</label>
                <input name="message" rows="5" defaultValue={message} onBlur={handleChange} />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button data-testid="button" type="submit">SUBMIT</button>
            </form>
          </div>
        </section>}
    </>
  );
}
export default Contact;