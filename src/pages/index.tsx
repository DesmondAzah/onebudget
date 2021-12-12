import React from "react";
import {ContainerSection, ImageDiv, MainH1, MyFirstDiv, SecondDiv} from "../components/pages/index-page-elements";

const Home = () => {
  return (
    <MyFirstDiv>
       <ContainerSection>
           <MainH1>
               Grab Total Control of Your Cash Flow
           </MainH1>
           <SecondDiv>
               <p>Stop living paycheck-to-paycheck,<br/>and start living cash-to-cash.</p>
           </SecondDiv>
           <ImageDiv>
               <p>                oneBudget is a free budgeting and financial tracking app that allows you to monitor your budget against your expenses.
               </p>
           </ImageDiv>
       </ContainerSection>
    </MyFirstDiv>
  );
};
export default Home;
