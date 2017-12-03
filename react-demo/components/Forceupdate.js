import React, { Component } from 'react';

export default class ForceUpdate extends Component {
   constructor() {
      super();

      
      this.forceUpdateHandler = 
         this.forceUpdateHandler.bind(this);
   };

   forceUpdateHandler() {
      this.forceUpdate();
   };

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   render() {
      return (
         <div>
            <button 
            onClick = {this.forceUpdateHandler}>
            FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }
}


