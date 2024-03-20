import React, { useState } from 'react';
import './UserForm.css';



const UserForm = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        switch(name) {
            case 'firstname':
                setFirstname(value);
                break;
            case 'lastname':
                setLastname(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmPassword};
        console.log("Welcome", newUser);
    }

    return (
        <div className='container'>
            <form onSubmit={ createUser }>
                <div className='content'>
                    <label>First Name </label>
                    <input className='content-input' type="text" name='firstname' value={firstname} onChange={handleChange} />
                </div>
                    
                <div className='content'>
                    <label>Last Name </label>
                    <input className='content-input' type="text" name='lastname' value={lastname} onChange={handleChange} />
                </div>

                <div className='content'>
                    <label>Email</label>
                    <input className='content-input' type="text" name='email' value={email} onChange={handleChange}/>
                </div>

                <div className='content'>
                    <label>Password</label>
                    <input className='content-input' type="text" name='password' value={password} onChange={handleChange}/>
                </div>

                <div className='content'>
                    <label>Confirm <br />Password</label>
                    <input className='content-input' type="text" name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
                </div>
            </form>

            <div>
                <h2>Your Form Data</h2>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>

        </div>

    )
}

export default UserForm;