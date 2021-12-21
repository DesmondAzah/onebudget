import React, {useState} from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import {
    Label,
    LoginWrapper, RemindMeCheckBox,
    SignInContent,
    SignInInContainer,
    SignSection, SubmitButton, UserNameInput
} from "../components/form/forms-elements";
import {NavLink} from "react-router-dom";

async function loginUser(credentials: any) {
    const response = await fetch('https://unebudget.herokuapp.com/api/v1/login', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:  `username=${credentials.username}&password=${credentials.password}`
    }).catch(error => {
        console.log(error);
    });

}
// @ts-ignore
const Login = ({ setToken }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    let remindMe;

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        // setToken(token);
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
                                          <p>Log on to oneBudget here</p>
                                          <br/>
                                          <Label>
                                              <UserNameInput onChange={e => setUserName(e.target.value)} type={"text"} placeholder={"Username"}/>
                                          </Label>
                                          <Label>
                                              <UserNameInput onChange={e => setPassword(e.target.value)} type={"password"} placeholder={"Password"}/>
                                          </Label>
                                          <div style={{"margin":"10px"}}>
                                              <RemindMeCheckBox type={"checkbox"} name={remindMe}/>
                                              <span>Remember me</span>
                                          </div>
                                          <div style={{"margin":"10px"}}>
                                              <NavLink to={'/forgot-password'}>Forgot Password?</NavLink>
                                          </div>
                                          <br/>
                                          <div>
                                              <Button variant="primary" type="submit">
                                                  Sign In
                                              </Button>
                                          </div>
                                          <span style={{"margin":"10px"}}>Don't have an account?  <NavLink to={'/signup'}>Sign Up</NavLink></span>

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
export default Login;
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
