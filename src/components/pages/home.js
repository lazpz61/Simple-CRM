import React, {Component} from "react";
import axios from 'axios';


// import Forms from "./inputs/forms";

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
          console.log("this is the response",response);
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
                <div className="heading">
                    <h1>Laz's Simple CRM Project</h1>
                    <h1>Home Page</h1>
                </div>

                <div className="inputBoxes"> 
                    {/* <Forms /> */}
                 </div>

                
                    <form>
                    <label>
                        
                        <input type="text"/>
                    </label>
                    
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        );
    }
}