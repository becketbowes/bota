import React, { useState } from "react";
import { validateEmail } from '../utils/helpers'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth';


function SignUp() {
    const [ formState, setFormState ] = useState({ firstName: '', lastName: '', email: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { firstName, lastName, email, password } = formState
    const [addUser] = useMutation(ADD_USER)
    
    //syncing the internal state of the component formState with the user input from the DOM. 
    const handleChange = async (e) => {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)

            //isValid conditional statement 
            if(!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            //no validation needed for message or name inputs, so just checks that something was inputted in those two fields. If not, then an error message will appear
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('')
            }
            console.log('errorMessage', errorMessage);

            // e.preventDefault();
            // await addUser({ variables: formState})
            // console.log('form State', formState)
            // setFormState('')
        }

        //wrapped in a conditional, so that the state only updates if the form data passed the quality tests
        if(!errorMessage) {
            //the name property of target refers to the name attribute of the form element
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }
    
    console.log(formState)

    //this function handles submission of the form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState)

        const mutationResponse = await addUser({
            variables: {
                firstName: formState.firstName,
                lastName: formState.lastName,
                email: formState.email,
                password: formState.password
            }
        })

        const token = mutationResponse.data.addUser.token
        Auth.login(token)
    }

    return(
        <div className="contact-item">
        <section className="signup">
            <div>
                <h1 className="section-title">SignUp</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" defaultValue={firstName} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" defaultValue={lastName} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" defaultValue={password} onBlur={handleChange} />
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>    
        </section>
        </div>
    )
}

export default SignUp;