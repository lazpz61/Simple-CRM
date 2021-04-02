import React, {Component} from "react";
import axios from 'axios';




export default class HomeDisplay extends Component{
    constructor(){
        super();
        
        this.state = {
            pagewelcome: "Welcome to my page",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this)
        this.portfolioItems = this.portfolioItems.bind(this)

    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category == filter;
            })
        });
    }

    getPortfolioItems(){
        axios
        .get("https://lazaroperez.devcamp.space/portfolio/portfolio_items")
        .then(response => {
          this.setState({
              data: response.data.portfolio_items
              })
          })
        .catch(error => {
          console.log("this is the error", error);
        });
      }

      portfolioItems() {

        return this.state.data.map(item => {
            console.log("Portfolio Item", item);
        })
      }


    render(){
        return (
            <div>
                <div className="heading">
                    <h1>Laz's Simple CRM Project</h1>
                    <h1>Home Page</h1>
                </div>
                    {this.portfolioItems}
            </div>
        );
    }
}