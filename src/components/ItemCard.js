import React from 'react';
import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {

  const nav = useNavigate()

  const navigate = () => {
    nav("/item/" + item.id)
  }

  return (

    <div className="card with-link" onClick={navigate}> <div className='input-container'>
      <img className='input-image'style={{ marginTop: '20px'}} src={item.image} alt="" />
    </div>
           <p className='input-container' style={{ fontSize: '10px', marginTop: '30px' }}> {item.title}</p>
           <h5>Price {item.price} €</h5>
    </div>


  );
};

export default ItemCard;