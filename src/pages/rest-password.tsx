import React, { useState } from 'react';
import {Row, Container, Col, Button, Spinner} from "react-bootstrap";
import {
    Label,
    LoginWrapper, SignSection, UserNameInput
} from "../components/form/forms-elements";
import {NavLink} from "react-router-dom";

async function resetPassword(credentials: any) {
    return await fetch('https://unebudget.herokuapp.com/api/v1/login', {
        method: 'POST',
        headers: {
            'Accept': '/*/',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:  `username=${credentials.username}&password=${credentials.password}`
    }).then(data => data.json()).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}
// @ts-ignore
const Reset = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoginState("loading");
        setLoading(true);
        const res = await resetPassword({
            username,
            password
        });
        if (res.status === 200) {
            setLoginState("success");
            setLoading(false);
            window.location.href = "/login";
        } else {
            setLoading(false);
            setLoginState("error");
        }

    }
    return (
        <>
            <SignSection>
                <Row>
                    <Col lg={4} sm={12}>

                    </Col>
                    <Col lg={4} sm={12}>
                        <Container>
                            <form onSubmit={handleSubmit}>
                                <LoginWrapper>
                                  <span>
                                      <img
                                          src="../../onebudgetLog.png"
                                          width="170"
                                          height="40"
                                          className="d-inline-block align-top"
                                          alt="One Budget"
                                      />
                                  </span>
                                    <h3>Reset your password</h3>
                                    <p>
                                        { loginState === "loading"? "Loading " && <Spinner animation={"border"}/>: null}

                                    </p>
                                    <Label>
                                        <UserNameInput onChange={e => setUserName(e.target.value)} type={"text"} placeholder={"Username"}/>
                                    </Label>
                                    <Label>
                                        <UserNameInput onChange={e => setPassword(e.target.value)} type={"password"} placeholder={"Password"}/>
                                    </Label>

                                    <div style={{"margin":"10px"}}>
                                        <NavLink to={'/login'}>Login</NavLink>
                                    </div>
                                    <br/>
                                    <div>
                                        <Button variant="primary" type="submit" disabled={loading}>
                                            { loading ? "Loading.. ": "Reset Password"}
                                        </Button>
                                    </div>

                                </LoginWrapper>
                            </form>
                        </Container>
                    </Col>
                    <Col lg={4} sm={12}>

                    </Col>
                </Row>
            </SignSection>


        </>
    );
};
export default Reset;
