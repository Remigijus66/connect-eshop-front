
import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

const HomePage = () => {
    const [items, setItems] = useState([])

        const getData = async () => {
        const data = await fetch("http://localhost:4000/getProdcts", {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
          },  })
        const res = await data.json()
        setItems(res)
    }
        const getKey = async () => {
        const data = await fetch("http://localhost:4000/getKey", {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
          },  })
        const res = await data.json()
      console.log(res.key)
    }

    useEffect(() => {
        getData()
        getKey()
    }, [])


    return (
        <div >
            <h1>Items for sale</h1>
            <div className="d-flex f-wrap">
                {items.map((x, i) => <ItemCard key={i} item={x} />)}

            </div>

        </div >

    );
};
export default HomePage