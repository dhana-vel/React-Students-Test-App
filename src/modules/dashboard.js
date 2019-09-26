import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
//import TableRow from './TableRow';

class Dashboard extends React.Component {
    constructor () {
        super();
        this.onChangeStudentId = this.onChangeStudentId.bind(this);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.saveData = this.saveData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.editData = this.editData.bind(this);
        this.state = {
            data: [],
            shown: false,
            id: '',
            name: '',
            age: ''
         };
         this.btnLabel = "Create";
         this.popupCaption = "Add";
         this.isEditView = false;
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
        this.btnLabel = "Create";
        this.popupCaption = "Add";
        this.setState({
            shown: true
        });
    }

    handleCancel() {
        this.setState({
            id: '',
            name: '',
            age: '',
            shown: false
        });
        this.isEditView = false;
    }

    saveData(e) {
        e.preventDefault();
        const obj = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age
        };
        let url;
        if (!this.isEditView) {
            url = 'http://localhost:4000/school/add';
        } else {
            url = 'http://localhost:4000/school/update/' + e.target.id;
        }
        axios.post(url, obj)
        .then(res => {
            this.getListFromDb();
            console.log(res.data);
        });
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

    deleteData(e) {
        axios.get('http://localhost:4000/school/delete/' + e.target.id)
        .then(res => {
            this.getListFromDb();
        });
    }

    editData(e) {
        this.isEditView = true;
        this.btnLabel = "Update";
        this.popupCaption = "Edit";
        this.setState({
            shown: true
        });
        axios.get('http://localhost:4000/school/edit/' + e.target.id)
        .then(res => {
            console.log(res);
            this.setState({
                id: res.data.id,
                name: res.data.name,
                age: res.data.age,
                _id: res.data._id
            });
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
                        {this.state.data.length === 0 && (<span>No rows found</span>)}
                        {/* {this.state.data.map((person, i) => <TableRow key = {i} 
                        data = {person} />)} */}
                        {this.state.data.map(( person, index ) => {
                            return (
                                <tr key={index}>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.age}</td>
                                    <td>
                                        <button id={person._id} onClick={this.deleteData}>Delete</button>
                                        <button id={person._id} onClick={this.editData}>Edit</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <p>
                <Link to="/login">Logout</Link>
                </p>
                <div id="create-dialog" className={this.state.shown ? 'visible' : 'hidden'}>
                    <h4>{this.popupCaption}</h4>
                    <p><input type="text" placeholder="id" value={this.state.id} onChange={this.onChangeStudentId} /></p>
                    <p><input type="text" placeholder="name" value={this.state.name} onChange={this.onChangeStudentName} /></p>
                    <p><input type="text" placeholder="age" value={this.state.age} onChange={this.onChangeStudentAge} /></p>
                    <p>
                        <input type="button" id={this.isEditView ? this.state._id : ''} onClick={this.saveData} value={this.btnLabel} />
                        <input type="button" value="Cancel" onClick={this.handleCancel} />
                    </p>
                </div>
            </div>
        );
    }
}

export default Dashboard;