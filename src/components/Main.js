import React, { Component } from 'react';
import { USERS } from '../shared/TEST_MOCK_DATA';
import { MessagesWindow } from './MessagesWindow'
import { AsidePanel } from './AsidePanel'

// ++ SERVER MODE
//import { baseUrl } from '../../shared/baseUrl'; 
// -- SERVER MODE

export class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // TEST MODE
        let users_JSON = new Array;
        for (let el of USERS.data) {
            users_JSON.push(new Object(el)); 
        }
        this.setState({users: users_JSON}, () => console.log(this.state.users))
 
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
            <div className="container">
                 <div className="chat-wrapper chat">
                    <AsidePanel users = {this.state.users} />
                    <MessagesWindow/>      
                </div>
            </div>
            
        );
    }
}

