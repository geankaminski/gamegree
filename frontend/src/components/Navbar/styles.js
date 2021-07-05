import styled from "styled-components";

export const NavigationBar = styled.nav`
  background-color: #0d8fe6;
  overflow: hidden;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 10px;

  h1 {
    a {
      text-decoration: none;
      color: white;
    }
  }

  button {
    color: #fff;
    font-size: 16px;
    background: #0d8fe6;
    height: 40px;
    border: 0;
    border-radius: 5px;
    width: 20%;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  cursor: pointer;
  margin-right: 30px;
`;
