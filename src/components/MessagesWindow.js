import React from 'react';

export const MessagesWindow = (props) => {
    return (
        <div className={props.isBurgerActive ? "chat__main active" : "chat__main"}>
            <div className="chat__info-default conversation">
                <div className="conversation__title">
                    <p>Select a conversation</p>
                </div>
                <div className="conversation__text">
                    Start by selecting a conversation or searching for someone specific
                    </div>
            </div>
        </div>
    );
}