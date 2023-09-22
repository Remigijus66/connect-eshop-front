import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub, FaPhone, FaRegEnvelope } from "react-icons/fa"
import { BsEnvelopeAt } from "react-icons/bs";

import Like from './like';

const Toolbar = () => {


    return (
        <div className='header d-flex f-wrap'>
            <Link to="/">Shop</Link>
            {/* <Link to="/checkout/">Checkout</Link> */}
            <Link to="/cart">Cart</Link>
            < Like />
            <FaGithub />
            <FaPhone />
            <FaRegEnvelope />
            <BsEnvelopeAt />
        </div>
    );
};

export default Toolbar;