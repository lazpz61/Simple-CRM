import React from "react";

export default function crm(props){
        return (
        <div>
                <h1>Laz's Simple CRM Project</h1>
                <h1>CRM Page</h1>
                <div className="crmTable">
                        <div className="employeeName">{props.name}</div>
                </div>
        </div>
        
        );
}


