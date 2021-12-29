import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0px 40px ;
  box-shadow: 0px 0px 16.83px 0.17px rgb(0 0 0 / 5%);
  -moz-box-shadow: 0px 0px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 0px 16.83px 0.17px rgb(0 0 0 / 5%);
  -o-box-shadow: 0px 0px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 0px 0px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  -o-border-radius: 20px;
  -ms-border-radius: 20px;
  `;

export const SignSection = styled.section`
    display: block;
    margin: 10px;
  `;
export const SignInInContainer = styled.div`
  max-width: 1200px;
  width: 35%;
  background: #fff;
  margin: 0 auto;
  margin-top: 40px;
  box-shadow: 0px 0px 16.83px 0.17px rgb(0 0 0 / 5%);
  -moz-box-shadow: 0px 0px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 0px 16.83px 0.17px rgb(0 0 0 / 5%);
  -o-box-shadow: 0px 0px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 0px 0px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  -o-border-radius: 20px;
  -ms-border-radius: 20px;
`;
export const SignInContent = styled.div`
  padding-top: 67px;
  padding-bottom: 87px;
  `;
export const SignInImage = styled.div`
  margin-left: 110px;
  margin-right: 20px;
  margin-top: 10px;
  width: 50%;
  overflow: hidden;
  `;
export const SignInForm = styled.div`
  margin-top: 90px;
  margin-bottom: 80px;
  width: 50%;
  overflow: hidden;
  font-size: 13px;
  line-height: 1.8;
  color: #222;
  background: #f8f8f8;
  font-weight: 400;
  font-family: Poppins;
  `;
export const Figure = styled.figure`
  margin-bottom: 0;
  `;
export const UserNameInput = styled.input`
  width: 100%;
  display: block;
  border: none;
  border-bottom: 1px solid #999;
  padding: 6px 30px;
  font-family: Poppins;
  box-sizing: border-box;
  
  `;
export const SubmitButton = styled.button`
  display: inline-block;
  background: #6dabe4;
  color: #fff;
  border-bottom: none;
  width: auto;
  padding: 15px 39px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  margin-top: 25px;
  cursor: pointer;
  margin-top: 16px;
  border-color: #6dabe4;
  font-size: 14px;
  `;
export const Label = styled.label`
  display: block;
  margin-bottom: 30px;
  width: 100%;
  `;
export const RemindMeCheckBox = styled.input`
  display: inline-block;
  line-height: 1.5em;
  margin-top: 6px;
  `;
export const Spinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border-top-color: #6dabe4;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
  `;
