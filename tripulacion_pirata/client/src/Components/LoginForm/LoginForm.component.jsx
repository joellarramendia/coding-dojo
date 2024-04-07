import { useState } from "react";
import HTTPClient from "../../Utils/HTTPClient";
import { useNavigate } from "react-router-dom";
import "../forms.css";

const LoginForm = (props) => {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({});
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

        if (data.password.length < 5){
            errors.password = "La contraseña no puede tener menos de 5 caracteres";
            flag = false;
        }

        setErrors(errors);
        return flag;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()){
            return;
        }

        let client = new HTTPClient();

        client.login(data.email, data.password)
            .then((response) => {
                navigate("/pirates");
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
            <h2>Login</h2>
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
                <div>
                    <button className="btn-login" type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
