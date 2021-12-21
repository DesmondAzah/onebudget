import React from "react";
import {
     Label,
    LoginWrapper,
    SignInContent,
    SignInInContainer,
    SignSection, SubmitButton, UserNameInput
} from "../components/form/forms-elements";
import {NavLink} from "react-router-dom";
import {Row,Col, Container, Button} from "react-bootstrap";

const ForgotPassword = () => {
    let email;
    return (
      <>
          <SignSection>
              <Row>
                  <Col lg={4} sm={12}/>
                  <Col lg={4} sm={12}>
                          <form>
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
                                  <p>Enter your email address and we will send you instructions to reset your password.</p>
                                  <br/>
                                  <Label>
                                     <UserNameInput name={email} type={"text"} placeholder={"Email Address"} required/>
                                  </Label>
                                  <div>
                                      <Button variant="primary" type="submit">
                                          Continue
                                      </Button>
                                  </div>
                                  <span style={{"margin":"10px"}}>Return back to?  <NavLink to={'/login'}>Log In page</NavLink></span>

                              </LoginWrapper>
                          </form>
                  </Col>
                  <Col lg={4} sm={12}/>
              </Row>
          </SignSection>


      </>
  );
};
export default ForgotPassword;
