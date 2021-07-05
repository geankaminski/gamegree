import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 120px;

  h3 {
    display: block;
    margin-bottom: 40px;
  }

  .card {
    display: flex;
    flex-direction: column;
    color: blue;
    width: 25%;
    font-size: 20px;
    background-color: #0d8fe6;
    padding: 5px;
    border-radius: 10px;
    align-items: center;
    padding-bottom: 20px;
    color: white;

    .question {
      width: 100%;
      align-items: center;
      text-align: center;
      margin-bottom: 20px;
      margin-top: 10px;
    }

    .answer {
      margin-top: 10px;
      cursor: pointer;
      width: 80%;
      align-items: center;
      text-align: center;
      border-radius: 5px;
      background-color: #e0dfdf;
      color: #0d8fe6;
    }
  }
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
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
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
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
`;