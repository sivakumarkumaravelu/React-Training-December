
// presentation component 

import React from "react";
export const Main =(props) =>{  
        return (
            <div>
               <div className="row">
                 <div className="col-xs-12">
                   <h1>The Main Page</h1>
                   </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <button   
                        className="btn btn-success"
                        onClick={ 
                            () => props.changeUsername('Sriram')}>
                            Change username
                    </button>
                    </div>
                 </div>
            </div>
        );
    }
