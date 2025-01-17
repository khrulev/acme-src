import React from 'react';
import { Star as star_svg } from '../shared/img/star.js';

const UserItem = (props) => {
    return (
        <div className={props.selected.has(props.id) ? "user user-selected" : "user"} onClick={props.handleSelectUser(props.id)}>
            <div className="user__img">
            </div>
            <div className="user__info">
                <div className="user__name">
                    {props.fullName}`
                    </div>
                <div className="user__email">
                    {props.email}
                </div>
            </div>
            <div className="user__status recent">
                <div className="recent__time">
                    1h
                    </div>
                <div className={props.isFavorite ? 'recent__follow star-gold' : 'recent__follow star-gray'} dangerouslySetInnerHTML={{ __html: star_svg }}>
                </div>
            </div>
        </div>
    );
}

export const Users = (props) => {

    const users_list = props.filterByName(props.users).map((user) => {
        let fullName = user.firstName + ' ' + user.lastName;
        return (<UserItem
            key={String(user.id)}
            fullName={fullName}
            email={user.email}
            isFavorite={user.isFavorite}
            id={user.id}
            handleSelectUser={props.handleSelectUser}
            selected={props.selected}
        />
        );
    });

    return (
        <div className="chat__users">
            {users_list}
        </div>
    );
}



