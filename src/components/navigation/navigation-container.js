import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Navigation extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/crm">Crm</NavLink>

            </div>
        );
        }
    }