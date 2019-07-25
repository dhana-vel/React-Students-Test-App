import React from "react";
import { Link } from 'react-router-dom';
class Dashboard extends React.Component {
    constructor () {
        super();
        this.state = {
            data: 
            [
               {
                  "id":1,
                  "name":"Foo",
                  "age":"20"
               },
               {
                  "id":2,
                  "name":"Bar",
                  "age":"30"
               },
               {
                  "id":3,
                  "name":"Baz",
                  "age":"40"
               }
            ]
         };
    }
    render() {
        return (
            <div className="align-center">
                <h3>Students Data</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                        {this.state.data.map((person, i) => <TableRow key = {i} 
                        data = {person} />)}
                    </tbody>
                </table>
                <Link to="/login">Logout</Link>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
          </tr>
       );
    }
 }

export default Dashboard;