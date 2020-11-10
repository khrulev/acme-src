import React from 'react';

const SelectOptionItem = (props) => {
    return (
        <option value={props.value}>{props.option}</option>
    );
}

export const Conversations = (props) => {
    
    const options_list = props.filterByName(props.users).map((user) => {
        let fullName = user.firstName+' '+user.lastName;
        return (<SelectOptionItem 
                    key={String(user.id)} 
                    value={String(fullName)} 
                    option={fullName}/>
        ); 
    });

    return (
        <div className="conversation__btn">
            <select  className="conversation" id="conversations" onChange={props.handleSelectChange}>
                <option  value="">All conversations</option>
                {options_list}
            </select>
        </div>
    )
}