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
                <form>
                <label>
                    Employee Name:
                </label>
                <input type="text" value={this.state.employee.employeeName}/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}