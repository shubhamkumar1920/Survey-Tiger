import React from 'react'
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="my-5">
            <Link to="/create">
            <button className="btn btn-info m-1">Create Survey</button>
            </Link>
            <br/>
             <Link to="/published">
            <button className="btn btn-dark m-3">Take Survey</button>
            </Link>
        </div>
    );
};

export default Menu;
