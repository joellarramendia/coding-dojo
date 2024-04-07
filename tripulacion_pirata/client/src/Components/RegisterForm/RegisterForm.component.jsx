import { useState } from "react";
import HTTPClient from "../../Utils/HTTPClient";
import { useNavigate } from "react-router-dom";
import "../forms.css";

const RegisterForm = (props) => {

    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const validate = () => {
        let flag = true;
        let errors = {};

        if (data.password.length < 5) {
            errors.password = "La contraseña debe tener al menos 5 caracteres";
            flag = false;
        }

        if (data.password && data.password2 && data.password !== data.password2) {
            errors.passwordMatch = "Las contraseñas no coinciden";
            flag = false;
        }

        setErrors(errors);
        return flag;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        let client = new HTTPClient();

        client.register(data)
            .then((response) => {
                console.log("Registro exitoso");
                navigate("/");
            })
            .catch((error) => {
                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                } else {
                    console.log(error);
                }
            });
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
            <h2>Register</h2>
                <div className="form-login-content">
                    <label htmlFor="firstName">Nombre:</label> <br />
                    {errors.firstName && <small>{errors.firstName}</small>}
                    <input 
                        id="firstName"
                        type="text" 
                        name="firstName" 
                        value={data.firstName || ""} 
                        onChange={handleChange}
                        required={true}
                    />
                </div>

                <div className="form-login-content">
                    <label htmlFor="lastName">Apellido:</label> <br />
                    {errors.lastName && <small>{errors.lastName}</small>}
                    <input 
                        id="lastName"
                        type="text" 
                        name="lastName" 
                        value={data.lastName || ""} 
                        onChange={handleChange}
                        required={true}
                    />
                </div>

                <div className="form-login-content">
                    <label htmlFor="email">Email:</label> <br />
                    {errors.email && <small>{errors.email}</small>}
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        value={data.email || ""} 
                        onChange={handleChange}
                        required={true}
                    />
                </div>

                <div className="form-login-content">
                    <label htmlFor="password">Password:</label> <br />
                    {errors.password && <small>{errors.password}</small>}
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        value={data.password || ""} 
                        onChange={handleChange}
                        required={true}
                        minLength={5}
                    />
                </div>

                <div className="form-login-content">
                    <label htmlFor="password2">Confirme su contraseña:</label> <br />
                    {errors.passwordMatch && <small>{errors.passwordMatch}</small>}
                    <input 
                        id="password2"
                        type="password" 
                        name="password2" 
                        value={data.password2 || ""} 
                        onChange={handleChange}
                        required={true}
                        minLength={5}
                    />
                </div>

                <div>
                    <button className="btn-register" type="submit">Registro</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
