import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Admin from '../admin';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const [login, setLogin] = useState(false);

  //make actual password page for secret backend:

  // const [adminName, setAdminName] = useState('');
  // const [adminPass, setAdminPass] = useState('');

  // const inputAdmin = (e) => {
  //   const { target } = e;
  //   const inputName = target.name;
  //   const inputValue = target.value;

  //   if (inputName === 'adminName') {
  //     setAdminName(inputValue);
  //   } else if (inputValue === 'adminPass') {
  //     setAdminPass(inputValue)
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name === 'Fucking Nancy Botwin') {
      setLogin(!login)
    }
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }

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

  const resetForm = () => { setFormState({ name: '', email: '', message: '' }); window.location.reload(true); alert('message sent!') };

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
              <button data-testid="button" type="submit" onClick={resetForm}>SUBMIT</button>
            </form>
          </div>
        </section>}
    </>
  );
}
export default Contact;