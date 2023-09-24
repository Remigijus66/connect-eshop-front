import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleItem from '../components/SingleItem';

const ItemPage = ({ cart, setCart }) => {
  const { id } = useParams()
  const [item, setItem] = useState([])

  const getSingleItem = async () => {
    const bodyData = {
        id: id
    }
    console.log(bodyData)
    const data = await fetch("http://localhost:4000/getSingleProdct", {
     method: 'POST' ,
     headers: {
      "Content-Type": "application/json",
    },
       body: JSON.stringify(bodyData),  
    })

    const res = await data.json()
    setItem(res)
}

  useEffect(() => {
    getSingleItem()
  }, [])


  return (
    <div >
      <SingleItem item={item} cart={cart} setCart={setCart} />
    </div>

  );
};
export default ItemPage