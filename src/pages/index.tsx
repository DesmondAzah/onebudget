import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import {
    ContainerSection,
    MyFirstDiv, MySecondDiv, MyThirdDiv,
    SecondDiv, UnorderedList
} from "../components/pages/index-page-elements";

const Home = () => {
  return (
      <>
          <br/>
          <MyFirstDiv>
          <ContainerSection>
              <Row>
                  <Col lg={6} sm={12}>
                      <SecondDiv>
                          <p>Grab Total Control of Your Cash Flow
                              <br/>and start living cash-to-cash.</p>
                      </SecondDiv>
                  </Col>
                  <Col lg={6} sm={12}>
                      <SecondDiv className={'container-fluid'}>
                          Stop living paycheck-to-paycheck!
                          <p> oneBudget is a free budgeting and financial tracking app,<br/>that allows you to monitor
                              your budget against your expenses.</p>
                      </SecondDiv>
                  </Col>
              </Row>
          </ContainerSection>
      </MyFirstDiv>
          <br/>
          <MySecondDiv>
          <ContainerSection>
              <Row>
                  <Col lg={6} sm={12}>
                      <SecondDiv>
                          <p>Hop on it by signing up and start budgeting away.<br/>
                              You will only need to follow these basic steps:</p>
                          <UnorderedList>
                              <li>Create a new account</li>
                              <li>Create a new budget</li>
                              <li>Add your expenses / income</li>
                              <li>See your report</li>
                          </UnorderedList>
                      </SecondDiv>
                  </Col>
                  <Col lg={6} sm={12}>
                      <SecondDiv className={'container-fluid'}>
                          Now if that is not simple I don't know what is.
                          <p>
                              oneBudget is a great way to keep track of your money.<br/>
                              You can also use it to track your expenses and income.
                              <br/>
                              Now you can see how much you have left to spend and how much you have left to save.<br/>
                          </p>
                      </SecondDiv>
                  </Col>
              </Row>
          </ContainerSection>
      </MySecondDiv>
      <br/>
          <MyThirdDiv>
              <ContainerSection>
                  <Row>
                      <Container>
                          <SecondDiv>
                              <p>Hop on it by signing up and start budgeting away.</p>
                          </SecondDiv>
                      </Container>
                  </Row>
              </ContainerSection>
          </MyThirdDiv>
      </>
  );
};
export default Home;
