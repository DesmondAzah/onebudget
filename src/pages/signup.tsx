import React, {useState} from "react";
import {
    Label,
    LoginWrapper,
    SignSection,
    UserNameInput
} from "../components/form/forms-elements";
import {NavLink} from "react-router-dom";
import {Row, Col, Container, Button, Spinner} from "react-bootstrap";

async function signup(payload: any) {
    return  await fetch("https://unebudget.herokuapp.com/api/v1/account/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: payload.username,
            password: payload.password,
            email: payload.username,
            fullName: payload.fullName
        })
    }).then(data => data.json()).catch(err => console.log('There has been a problem with your fetch operation:', err));
}
const Signup = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConfPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);

    function validateEmail(username: string) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(username);
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setDisable(true);
        setLoading(true);
        if(conPassword !== password){
            setError("Passwords do not match");
            setLoading(false);
            return;
        }else if(!validateEmail(username)){
            setError("Invalid email");
            setLoading(false);
            setDisable(false);
            return;
        } else {
            const res = await signup({
                username,
                password,
                fullName
            });
            if (res.status === 200) {
                setSuccess("Account created successfully check your email to verify your account!!");
                setLoading(false);
                setDisable(false);
                setUserName("");
                setPassword("");
                setConfPassword("");
                setFullName("");
            } else {
                setError(res.message);
                setLoading(false);
                setDisable(false);
            }
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
                                    <h3>Welcome!!</h3>
                                    <p>Sign up on to oneBudget here </p>
                                    <p>
                                        {loading ? (
                                            <Spinner style={{"color":"blueviolet"}} animation={"border"}/>
                                        ) : (
                                            <span >
                                                {error ? (
                                                    <span style={{"color":"red"}}>{error}</span>
                                                ) : (
                                                    <span style={{"color":"green"}}>{success}</span>
                                                )}
                                            </span>
                                        )}
                                    </p>
                                    <Label>
                                        <UserNameInput onChange={e => setFullName(e.target.value)} type={"text"} placeholder={"John Doe"} required/>
                                    </Label>
                                    <Label>
                                        <UserNameInput onChange={e => setUserName(e.target.value)} type={"text"} placeholder={"johndoe@email.com"} required/>
                                    </Label>
                                    <Label>
                                        <UserNameInput onChange={e => setPassword(e.target.value)} type={"password"} placeholder={"Password"} required/>
                                    </Label>
                                    <Label>

                                        <UserNameInput onChange={e => setConfPassword(e.target.value)} type={"password"} placeholder={"Confirm Password"} required/>
                                    </Label>
                                    <br/>
                                    <div>
                                        <Button variant="primary" type="submit" disabled={disable}>
                                            { disable ? "Loading..." : "Sign Up"}
                                        </Button>
                                    </div>
                                    <span style={{"margin":"10px"}}>Already  have an account?  <NavLink to={'/login'}>Log In </NavLink></span>

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

export default Signup;
