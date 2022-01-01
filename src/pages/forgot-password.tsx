import React from "react";
import {
     Label,
    LoginWrapper,
    SignSection, UserNameInput
} from "../components/form/forms-elements";
import {NavLink} from "react-router-dom";
import {Row, Col, Button, Spinner} from "react-bootstrap";

const resetPassword = async (token: string) => {
    return  await fetch("https://unebudget.herokuapp.com/api/v1/account/forgotPassword/"+token, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res) => res.json()).catch((err) => console.log(err));
};
const ForgotPassword = () => {
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    function validateEmail(): boolean {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(validateEmail());
        if(validateEmail()){
            setLoading(false);
            resetPassword(email).then((res) => {
                if(res.status === 200){
                    setSuccess(res.message);
                }else{
                    setError(res.message);
                }
            }).catch((err) => {
                setError(err.message);
            }).finally(() => {
                setLoading(false);
            });
            setSuccess("Password reset link sent to your email");
        } else {
            setLoading(false);
            setError("Invalid email");
        }
        };
    return (
      <>
          <SignSection>
              <Row>
                  <Col lg={4} sm={12}/>
                  <Col lg={4} sm={12}>
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
                                  <p>Enter your email address and we will send you instructions to reset your password.</p>
                                  <p>
                                      {loading? (<Spinner animation={"grow"}/>): (
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
                                     <UserNameInput  onChange={e=> setEmail(e.target.value)} placeholder={"Email Address"} required/>
                                  </Label>
                                  <div>
                                      <Button variant="primary" type="submit" disabled={loading}>
                                          {loading ? "Loading..." : "Continue"}
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
