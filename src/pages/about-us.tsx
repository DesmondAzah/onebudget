import React from "react";

const About = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "right",
                height: "100vh",
                backgroundColor: "#f5f5f5"
            }}
        >
            <h1>About Us</h1>
            <p>
                oneBudget is a free budgeting and financial tracking app that allows you to monitor your budget against your expenses.
            </p>
            <p>
                Hop on it by signing up and start budgeting away.<br/>
                You will only need to follow these basic steps:
                <ul>
                    <li>Create a new account</li>
                    <li>Create a new budget</li>
                    <li>Add your expenses / income</li>
                    <li>See your report</li>
                </ul>
                <br/>
                Now if that is not simple I don't know what is.
            </p>
            <p>
                oneBudget just budget is a great way to keep track of your money.<br/>
                You can also use it to track your expenses and income.
                <br/>
                Now you can see how much you have left to spend and how much you have left to save.<br/>
            </p>
        </div>
    );
};
export default About;
