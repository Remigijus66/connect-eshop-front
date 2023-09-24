import React from 'react';
import { Link } from "react-router-dom";

const Toolbar = () => {


    return (
        <div className='header d-flex f-wrap'>
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
    );
};

export default Toolbar;