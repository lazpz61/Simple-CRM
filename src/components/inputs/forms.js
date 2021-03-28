import React, {Component}  from "react";

export default class Forms extends Component {
    constructor(props){
        super(props);

        this.state = {
            employee:{
                employeeName: props.employeeName
            }
        }
    }
    render(){
        return(
            <div>
                <label>
                    Employee Name:
                </label>
                <input type="text" value={this.state.employee.employeeName}/>
            </div>
        )
    }
}