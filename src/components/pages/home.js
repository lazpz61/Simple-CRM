
import React, {Component} from "react";

// import Forms from "./inputs/forms";

export default class Home extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            value: ''
        };

    
    }
    render(){
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
                        Employee Name
                        <input type="text" value={this.state.value} />
                    </label>
                    
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        );
    }
}