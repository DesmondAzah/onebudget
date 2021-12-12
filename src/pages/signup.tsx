import React from "react";
import {
    Label,
    LoginWrapper,
    SignInContent,
    SignInInContainer,
    SignSection, SubmitButton,
    UserNameInput
} from "../components/form/forms-elements";
import {NavLink} from "react-router-dom";

const Signup = () => {
    let email;
    let password;
    let confirmPassword;
    let fullName;
    return (
        <>
            <SignSection>
                <SignInInContainer>
                    <SignInContent>
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
                                <p>Sign up on to oneBudget here </p>
                                <br/>
                                <Label>
                                    <UserNameInput name={fullName} type={"text"} placeholder={"John Doe"}/>
                                </Label>
                                <Label>
                                    <UserNameInput name={email} type={"text"} placeholder={"johndoe@email.com"}/>
                                </Label>
                                <Label>
                                    <UserNameInput name={password} type={"password"} placeholder={"Password"}/>
                                </Label>
                                <Label>
                                    <UserNameInput name={confirmPassword} type={"password"} placeholder={"Confirm Password"}/>
                                </Label>
                                <br/>
                                <div>
                                    <SubmitButton type={"submit"} value={"Sign Up"}>
                                       Sign Up
                                    </SubmitButton>
                                </div>
                                <span style={{"margin":"10px"}}>Already  have an account?  <NavLink to={'/login'}>Log In </NavLink></span>

                            </LoginWrapper>
                        </form>
                    </SignInContent>
                </SignInInContainer>
            </SignSection>


        </>
    );
};

export default Signup;
