import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Admin from '../admin';
import Auth from '../utils/auth';


function Adminlogin() {
    const [ formState, setFormState ] = useState({ email: '', password: ''});
    const { email, password } = formState
    const [login] = useMutation(LOGIN)

    const [chinny, setChinny] = useState(false);
    
    //syncing the internal state of the component formState with the user input from the DOM. 
    const handleChange = (e) => {
            setFormState({...formState, [e.target.name]: e.target.value})
    }
    
    //this function handles submission of the form data
    const handleSubmit = async (e) => {
        e.preventDefault();

        // const mutationResponse = await login({
        //     variables: {
        //         email: formState.email,
        //         password: formState.password
        //     }
        // })

        // const admin = mutationResponse.data.login.user.admin
        // const token = mutationResponse.data.login.token
        // Auth.login(token, admin)

                //place setChinny in this if once token is working?
        // if (token && admin) {

        // }


        if (formState.password.length){
            setFormState('');
            console.log(Auth, login);
            setChinny(true);
        }
    };

    return(
        <>
        {chinny ? 
            <Admin />
        :
        <div className="contact-item">
        <section className="login">
            <div>
                <h1 className="section-title">Hello Chinny!</h1>
                <span>Please log in.</span>
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
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>    
        </section>
        </div>
        }
        </>
    )
}

export default Adminlogin;