import React, { Component } from "react";
import { logout } from "../../services/auth";
import { Link } from "react-router-dom";

import { NavigationBar, Button } from "./styles";

export class Navbar extends Component {

    handleLogout = async e => {
        logout();
    }

    render () {
        return (
            <>
            <NavigationBar>
              <h1><Link to="/app">Gamegree</Link></h1>
              <form onSubmit={this.handleLogout}>
                <Button type="submit" >Sair</Button>
              </form>
            </NavigationBar>
            </>
        );
    }
}
