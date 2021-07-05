import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-bottom: 100px;
`;

export const Form = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  h4 {
    color: black;
    margin-bottom: 15px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 80%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #0d8fe6;
    height: 40px;
    border: 0;
    border-radius: 5px;
    width: 90%;
    cursor: pointer;
    margin-top: 15px;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
  .span-user {
    color: #ff3333;
    width: 80%;
    text-align: center;
    margin-top: 10px;

    .button-delete {
      color: #fff;
      font-size: 16px;
      background: #0d8fe6;
      height: 40px;
      border: 0;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 15px;
    }
  }
`;