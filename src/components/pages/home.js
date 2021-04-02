import React, {Component} from "react";
import axios from 'axios';
import Forms from "../inputs/forms"
import HomeDisplay from "../homepage-container/home-display"


export default class Home extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            value: ""
        };

        this.getPortfolioItems = this.getPortfolioItems.bind(this);

    }

    getPortfolioItems(){
        axios
        .get("https://lazaroperez.devcamp.space/portfolio/portfolio_items")
        .then(response => {
          this.setState({})
        })
        .catch(error => {
          console.log("this is the error", error);
        });
      }

// HandleChange 

// HandleSubmit

    render(){
        this.getPortfolioItems();
        return (
            <div>
                <HomeDisplay />
                <div className="inputBoxes"> 
                <Forms />
                </div>

            </div>
        );
    }
}