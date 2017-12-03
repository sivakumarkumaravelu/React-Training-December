import React from 'react';

class StatefulApp extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Siva",
               "age":"33"
            },
				
            {
               "id":2,
               "name":"Kumar",
               "age":"22"
            },
				
            {
               "id":3,
               "name":"Vivhaan",
               "age":"11"
            },
            {
                "id":4,
                "name":"SK",
                "age":"14"
             }
         ]
      }
   }
	
   render() {
      return (
         <div >
            <Info/>
            <table className='table-hover table-bordered'>
               <tbody>
                  {
                      this.state.data.map((person, i) =>
                      <TableRow key = {i} data = {person} />)
                  }
               </tbody>
            </table>
         </div>
      );
   }
}

class Info extends React.Component {
   render() {
      return (
         <div>
            <h1 className='text-danger'>Employees</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr className='bg-success'>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default StatefulApp;
