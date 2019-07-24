import React from "react";
import { Link } from 'react-router-dom';
class List extends React.Component {
    render() {
        return (
            <div>
                <h3>Students Data</h3>
                <Link to="/login">Logout</Link>
            </div>
        );
    }
}

export default List;