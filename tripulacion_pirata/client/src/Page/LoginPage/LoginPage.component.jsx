import LoginForm from "../../Components/LoginForm/LoginForm.component";
import RegisterForm from "../../Components/RegisterForm/RegisterForm.component";
import "./LoginPage.css";

const LoginPage = (props) => {
    return (
    <div>
    <header className="header-login">
        <h1 className="h1-login">Welcome to Pirate Crew</h1>
    </header>
        <div className="forms-content">
            <RegisterForm />
            <LoginForm />
        </div>
    </div>
    );
}

export default LoginPage;