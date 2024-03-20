import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const errors = (e) => {
        const {name} = e.target;
        switch(name) {
            case 'firstName':
                setFirstName(e.target.value);
                if (e.target.value.trim() !== "" && e.target.value.length < 2) {
                  setFirstNameError("El campo debe tener al menos 2 caracteres");
                } else {
                 //Limpia el mensaje de error si el campo de entrada cumple con los requisitos.
                  setFirstNameError("");
                }
                break;

            case 'lastName':
                setLastName(e.target.value);
                if (e.target.value.trim() !== "" && e.target.value.length < 2) {
                  setLastNameError("El campo debe tener al menos 2 caracteres");
                } else {
                  setLastNameError("");
                }
                break;

            case 'email':
                setEmail(e.target.value);
                if (e.target.value.trim() !== "" && e.target.value.length < 5) {
                  setEmailError("El campo debe tener al menos 5 caracteres");
                } else {
                  setEmailError("");
                }
                break;
            
            case 'password':
                setPassword(e.target.value);
                if (e.target.value.trim() !== "" && e.target.value.length < 8) {
                  setPasswordError("El campo debe tener al menos 8 caracteres");
                } else {
                  setPasswordError("");
                }
                break;
            
            case 'confirmPassword':
                setConfirmPassword(e.target.value);
                if (e.target.value.trim() !== "" && e.target.value !== password) {
                  setConfirmPasswordError("Las contraseñas no coinciden");
                } else {
                  setConfirmPasswordError("");
                }
                break;
            default:
                break;
        }
    }

    


    return(
        <form>
            <div className='content'>
                <label>First Name: </label> 
                <input className='content-input' type="text" name='firstName' onChange={errors}/>
            </div>
                {
                    firstNameError ?
                    <p style={{color: 'red'}}> {firstNameError} </p> : ''
                }

            <div className='content'>
                <label>Last Name: </label> 
                <input className='content-input' type="text" name='lastName' onChange={errors}/>
            </div>
                {
                    lastNameError ?
                    <p style={{color: 'red'}}> {lastNameError} </p> : ''
                }

            <div className='content'>
                <label>Email: </label> 
                <input className='content-input' type="text" name='email' onChange={errors}/>
            </div>
                {
                    emailError ?
                    <p style={{color: 'red'}}> {emailError} </p> : ''
                }

            <div className='content'>
                <label>Password: </label> 
                <input className='content-input' type="text" name='password' onChange={errors}/>
            </div>
                {
                    passwordError ?
                    <p style={{color: 'red'}}> {passwordError} </p> : ''
                }

            <div className='content'>
                <label>Confirm <br /> Password: </label> 
                <input className='content-input' type="text" name='confirmPassword' onChange={errors}/>
            </div>
                {
                    confirmPasswordError ?
                    <p style={{color: 'red'}}> {confirmPasswordError} </p> : ''
                }

        </form>
    )
}

export default UserForm;

