import React from "react";
import {
    Label,
    LoginWrapper, RemindMeCheckBox,
    SignInContent,
    SignInInContainer,
    SignSection, SubmitButton, UserNameInput
} from "../components/form/forms-elements";
import {NavLink} from "react-router-dom";
const Login = () => {
    let userName;
    let password;
    let remindMe;
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
                                  <p>Log on to oneBudget here</p>
                                  <br/>
                                  <Label>
                                     <UserNameInput name={userName} type={"text"} placeholder={"Username"}/>
                                  </Label>
                                  <Label>
                                      <UserNameInput name={password} type={"password"} placeholder={"Password"}/>
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
                                      <SubmitButton type={"submit"} value={"Log In"}>
                                          Log In
                                      </SubmitButton>
                                  </div>
                                  <span style={{"margin":"10px"}}>Don't have an account?  <NavLink to={'/signup'}>Sign Up</NavLink></span>

                              </LoginWrapper>
                          </form>
                  </SignInContent>
              </SignInInContainer>
          </SignSection>


      </>
  );
};
export default Login;
