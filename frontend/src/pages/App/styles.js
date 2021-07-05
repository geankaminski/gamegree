import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  background-color: #fafafa;
  padding: 30px;

  .play-card {
    width: 150px;
    margin-left: 25%;
    color: white;
    background-color: #0d8fe6;
    height: 150px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: white;
      text-decoration: none;
      font-size: 30px;
    }
  }

  .ranking {
    height: 100%;
    width: 300px;

    h3 {
      color: #0d8fe6;
      margin-bottom: 10px;
      margin-left: 18%;
    }

    table {
      color: #0d8fe6;
      padding: 15px;

      tr {
        margin: 10px;
      }

      th {
        padding: 10px;
      }
    }

    .points {
      color: #0d8fe6;
      margin-bottom: 50px;
      text-align: center;
    }
  }
`;

export const Navbar = styled.nav`
  background-color: #0d8fe6;
  overflow: hidden;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 10px;

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