import React from "react";
import { Link } from 'react-router-dom';
class Dashboard extends React.Component {
    constructor () {
        super();
        this.handleCreate = this.handleCreate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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
            ],
            shown: false
         };
    }

    handleCreate() {
        this.setState({
            shown: true
        });
    }

    handleCancel() {
        this.setState({
            shown: false
        });
    }

    render() {
        return (
            <div className="align-center">
                <h3>Students Data</h3>
                <p>
                    <input type="button" value="Add" onClick={this.handleCreate} />
                </p>
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
                <p>
                <Link to="/login">Logout</Link>
                </p>
                <div id="create-dialog" className={this.state.shown ? 'visible' : 'hidden'}>
                    <h4>Add Data</h4>
                    <p><input type="text" placeholder="name" /></p>
                    <p><input type="text" placeholder="age" /></p>
                    <p><input type="text" placeholder="id" /></p>
                    <p>
                        <input type="button" onClick={this.saveData} value="Create" />
                        <input type="button" value="Cancel" onClick={this.handleCancel} />
                    </p>
                </div>
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
             <td>
                 <input type="button" value="Delete" />
             </td>
          </tr>
       );
    }
 }

export default Dashboard;