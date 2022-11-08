import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const INITIAL_STATE = { email: "", password: "" };

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <p>
                To place an order you must sign in
            </p>
            <label>
                email:
                <input
                    required
                    type="email"
                    value={ loginInfo.email }
                    onChange={(e) => setLoginInfo( { ...loginInfo, email: e.target.value.toLowerCase() } )}
                />
            </label>
            <label>
                password:
                <input
                    required
                    onChange={(e) => setLoginInfo( { ...loginInfo, password: e.target.value } )}
                    value={ loginInfo.password }
                    type="password"
                />
            </label>
            <button>submit</button>
            <Link to="/createAccount">
                Create an account
            </Link>
        </Form>
    );
};

export default LoginPage;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`;