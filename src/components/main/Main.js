import React, { Component } from 'react';
import { USERS } from '../../shared/TEST_MOCK_DATA';
// ++ SERVER MODE
//import { baseUrl } from '../../shared/baseUrl'; 
// -- SERVER MODE

export default class Main extends Component {
    
    constructor(props) {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // TEST MODE
        this.setState({users: Object.values(USERS.data)})
        
        // ++ SERVER MODE
        // // for testing was used 'json-server'.
        // // json-server --watch users.json -p 3001 -d 2000
        // return fetch(baseUrl + 'users')
        // .then(response => response.json())
        // .then(json => {this.setState({users: json})})
        // .then(e => {console.log(this.state)}) 
        // -- SERVER MODE
    }

    render() {
        return (
            <div>
               123{/* {this.state.users} */}
            </div>
            
        );
    }
}