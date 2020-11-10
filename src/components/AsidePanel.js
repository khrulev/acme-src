import React from 'react';
import { Users } from './Users';
import { Filters } from './Filters';

const filterUsersByFullName = (name) => (arr) => {
    let filteredArray = arr.filter(item => {
        let fullName = item.firstName.toLowerCase() + ' ' + item.lastName.toLowerCase();
        return fullName.startsWith(name);
    });
    return filteredArray;
}

export class AsidePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterByName: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        console.log(event)
        this.setState({ filterByName: event.target.value.toLowerCase() });
    }

    render() {

        return (
            <div className="chat__aside">
                <Filters
                    users={this.props.users}
                    handleInputChange={this.handleInputChange}
                    filterByName={filterUsersByFullName(this.state.filterByName)} />
                < Users
                    users={this.props.users}
                    filterByName={filterUsersByFullName(this.state.filterByName)} />
            </div>
        );
    }

}