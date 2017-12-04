
import React from "react";
export const  User= (props)=> {
    
        return (
            <div>
               <div className="row">
                 <div className="col-xs-12">
                   <h1>The User Information Page</h1>
                   </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">                  
                     <h3>User name : {props.username}</h3>
                    </div>
                 </div>
            </div>
        );
    }
