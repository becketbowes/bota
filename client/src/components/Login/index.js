import React, { useState } from "react";
import { validateEmail } from '../utils/helpers'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth';


function Login() {
    const [ formState, setFormState ] = useState({ email: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { email, password } = formState
    const [login] = useMutation(LOGIN)
    
    //syncing the internal state of the component formState with the user input from the DOM. 
    const handleChange = (e) => {
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

        const mutationResponse = await login({
            variables: {
                email: formState.email,
                password: formState.password
            }
        })

        const admin = mutationResponse.data.login.user.admin
        const token = mutationResponse.data.login.token
        Auth.login(token, admin)
    }

    return(
        <section className="login">
            <div>
                <h1 className="section-title">Login</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
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
    )
}

export default Login;