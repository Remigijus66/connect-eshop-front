import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




const SingleItem = ({ item, cart, setCart }) => {
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />
  const [onCart, setOnCart] = useState(false)
  const handleCart = () => {

    if (cart.some(e => e.id === item.id)) {
      let cartCopy = [...cart]
      cartCopy.splice(cartCopy.findIndex(e => e.id === item.id), 1);
      setCart(cartCopy)
      setOnCart(false)
   
    } else {
      setCart([...cart, item])
      setOnCart(true)
    }

  }

  const checkCart = () => {

    if (cart.some(e => e.id === item.id)) {
      console.log('item found');
      setOnCart(true)
    } else {
      console.log('item not found');
      setOnCart(false)
    }
  }

  useEffect(() => {
    checkCart()
  }, [cart, item])


  return (

    <div>

      <div className='btn d-flex f-wrap' onClick={() => handleCart()}> {onCart === false && 'Add to Cart'}
        {onCart === true && 'Delete form Cart'} <div> {cartIcon}</div> </div>
      <div className="card-large" >  <img className='input-image' src={item.image} alt="" /> <p style={{ fontSize: '18px' }}> {item.title}</p>
        <p style={{ fontSize: '10px' }}> {item.description}</p>
        <h4>Price {item.price}</h4>
       </div>
    </div>
  );
};

export default SingleItem;