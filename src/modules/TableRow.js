import React from "react";
import axios from 'axios';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
        this.editData = this.editData.bind(this);
        this.state = {
            data: []
        }
    }

    deleteData() {
        axios.get('http://localhost:4000/school/delete/' + this.props.data._id)
        .then(res => console.log(res.data));
    }

    editData() {
        axios.get('http://localhost:4000/school/delete/' + this.props.data._id)
        .then(res => console.log(res.data));
    }

    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
             <td>
                 <button value="Delete" onClick={this.deleteData}>Delete</button>
                 <button value="Delete" onClick={this.editData}>Edit</button>
             </td>
          </tr>
       );
    }
 }

 export default TableRow;