import React from "react";
import Button from "./Button";
import "./Team.scss"




const Team = (props) => {

    const { name, role } = props.person

    return (

        <div className="main-box">

            <div className="info">
            <h3>Name: {name}</h3>
            <h3>Role: {role}</h3>
            </div>
            
            
            <div className="sub-box">
                <h3>Counter:</h3>
                <Button />
            </div>
         </div>
       
    )
    
}

export default Team;