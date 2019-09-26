import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor () {
        super();
        this.onChangeStudentId = this.onChangeStudentId.bind(this);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.saveData = this.saveData.bind(this);
        this.state = {
            data: [],
            shown: false,
            id: '',
            name: '',
            age: ''
         };
    }

    getListFromDb() {
        axios.get('http://localhost:4000/school')
        .then(response => {
          this.setState({ data: response.data });
        })
        .catch((error) => {
          console.log(error);
        })
    }

    componentDidMount() {
        this.getListFromDb();
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

    saveData() {
        const obj = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age
        };
        axios.post('http://localhost:4000/school/add', obj)
        .then(res => {this.getListFromDb();console.log(res.data);});
        this.handleCancel();
        this.setState({
            id: '',
            name: '',
            age: ''
        });
    }

    onChangeStudentId(e) {
        e.preventDefault();
        this.setState({
            id: e.target.value
        });
    }

    onChangeStudentName(e) {
        e.preventDefault();
        this.setState({
            name: e.target.value
        });
    }

    onChangeStudentAge(e) {
        e.preventDefault();
        this.setState({
            age: e.target.value
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
                    <p><input type="text" placeholder="id" value={this.state.id} onChange={this.onChangeStudentId} /></p>
                    <p><input type="text" placeholder="name" value={this.state.name} onChange={this.onChangeStudentName} /></p>
                    <p><input type="text" placeholder="age" value={this.state.age} onChange={this.onChangeStudentAge} /></p>
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
    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
    }

    deleteData() {
        axios.get('http://localhost:4000/school/delete/' + this.props.data.id)
        .then(res => {this.getListFromDb();console.log(res.data);});
    }

    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
             <td>
                 <button value="Delete" onClick={this.deleteData}>Delete</button>
             </td>
          </tr>
       );
    }
 }

export default Dashboard;