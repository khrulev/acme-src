import React, { Component } from 'react';
import { USERS } from '../shared/TEST_MOCK_DATA';
import { MessagesWindow } from './MessagesWindow'
import { AsidePanel } from './AsidePanel'
// import { baseUrl } from '../../shared/baseUrl'; 

export class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            selected: new Set()
        }

        this.handleSelectUser = this.handleSelectUser.bind(this);
        this.handleFolowUptUser = this.handleFolowUptUser.bind(this); 
    }

    handleSelectUser = (id) => (e) => {
        let select_new = new Set([...this.state.selected]);
        if (select_new.has(id)) {
            select_new.delete(id);
        } else {
            select_new.add(id);    
        }
        this.setState({ selected: select_new});
    }

    handleFolowUptUser = ()=> {
        if (this.state.selected.size===0) {
            alert('You need to mark at least 1 user in userlist window!');
            return;
        }

        let users_new = this.state.users.map(user => {
            if (this.state.selected.has(user.id)) user.isFavorite = !user.isFavorite;    
            return user; 
        });

        this.setState({users: users_new});
        this.setState({ selected: new Set()});
    }

    componentDidMount() {
        // TEST FILE MODE
        let users_JSON = new Array;
        for (let el of USERS.data) {
            users_JSON.push(new Object(el)); 
        }
        this.setState({users: users_JSON})
 
        // ++ SERVER MODE
        // // for testing was used 'json-server'.
        // // json-server --watch users.json -p 3001 -d 2000
        // return fetch(baseUrl + 'users')
        // .then(response => response.json())
        // .then(json => {this.setState({users: json})})
        // -- SERVER MODE
    }

    render() {
        return (
            <div className="container">
                 <div className="chat-wrapper chat">
                    <AsidePanel 
                        users = {this.state.users} 
                        selected = {this.state.selected}
                        handleSelectUser={this.handleSelectUser} 
                        handleFolowUptUser = {this.handleFolowUptUser}/>
                        
                    <MessagesWindow/>      
                </div>
            </div>
            
        );
    }
}

