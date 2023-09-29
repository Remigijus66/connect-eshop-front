import React from 'react';


const CartCard = ({ item, cart, setCart, cartValue, setCartValue }) => {

  const deletefromCart = () => {
    let cartCopy = [...cart]
    cartCopy.splice(cartCopy.findIndex(e => e.id === item.id), 1);
    setCart(cartCopy)
    const val = cartValue - item.price;
    setCartValue(Number(val.toFixed(2)));
  }

  return (
    <div>
      <button className='btn small' onClick={deletefromCart}>Delete from Cart</button>
      <div className="card" >  <div className='input-container'> <img className='input-image' src={item.image} alt="" /></div> <div className='input-container'><p style={{ fontSize: '10px' }}> {item.title}</p> </div> <h5>Price {item.price} €</h5>
      </div>
    </div>


  );
};

export default CartCard;

