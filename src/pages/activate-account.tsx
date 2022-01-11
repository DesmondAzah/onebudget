import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {Col, Row, Spinner} from "react-bootstrap";
const activateUser = async (token: string) => {
    return  await fetch("https://unebudget.herokuapp.com/api/v1/account/activate/"+token, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res) => res.json()).catch((err) => console.log(err));
};
const ActivateAccount = () => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const loc = location.pathname.split("/");
    const token = loc[loc.length - 1];
    let buffer = new Buffer(token, "base64");
    let decoded = buffer.toString("ascii");
    if(!loading && success === "" && error === "") {
        setLoading(true);
        activateUser( decoded).then((res) => {
            if(res.status === 200) {
                setSuccess(res.message+" ...redirecting to login page!!");
                setLoading(false);
                setTimeout(() => {
                    window.location.href = "/login";
                }, 3000);
            } else {
                setError(res.error);
                setLoading(false);
            }
        }).catch((err) => {
            setError(err);
        });
    }
    return (
        <Row style={{marginTop:"20%"}}>
            <Col lg={4} sm={12}></Col>
            <Col lg={4} sm={12}>
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
            </Col>
            <Col lg={4} sm={12}></Col>
        </Row>
  );
};
export default ActivateAccount;
