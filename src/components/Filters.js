import React from 'react';
import { Conversations } from './Conversations';
import searchlogo from '../shared/img/search.svg';

export const Filters = (props) => {

    return (
        <div className="chat__filter">
            <div className="chat__filter-top">
                <div className="search__btn">
                    <img src={searchlogo} alt={'search'} />
                    <input type="text" placeholder="Search or a new chat..." onChange={props.handleInputChange} />
                </div> 
                <div className="newchat__btn">
                    <button onClick={() => alert("Creating new room in progress...!")}>
                        <div className="create__btn">
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title /><path d="M48,6C21.5332,6,0,22.1484,0,42,0,55.1074,9.0879,66.7441,24,73.125V84a5.997,5.997,0,0,0,8.7246,5.3438l23.52-11.9825C79.3477,74.3965,96,59.6543,96,42,96,22.1484,74.4668,6,48,6Zm5.8066,59.5664a6.0522,6.0522,0,0,0-2.0625.6211L36,74.209V69a5.9975,5.9975,0,0,0-4.0664-5.6777C19.8223,59.1914,12,50.8242,12,42c0-13.0078,16.4883-24,36-24S84,28.9922,84,42C84,53.5254,71.0215,63.6563,53.8066,65.5664Z" /></svg>
                                +
                            </div>
                    </button>
                </div>
            </div>

            <div className="chat__filter-bottom">
                < Conversations
                    users={props.users}
                    filterByName={props.filterByName}
                    handleSelectChange={props.handleInputChange} />

                <div className="followup__btn">
                    <button onClick={props.handleFolowUptUser}>
                        <div className="followup__btn-link">
                            Follow up
                        </div>
                    </button>
                </div>

            </div>
        </div>

    );
};