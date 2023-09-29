
import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

const HomePage = () => {
    const [items, setItems] = useState([])

    const getData = async () => {
        const data = await fetch("http://localhost:4000/getProdcts", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
        })
        const res = await data.json()
        setItems(res)
    }

  
    // const connectShop = async () => {
    //     const url = 'http://localhost:4000/connectShop';
    //     const data = {
    //       user_session:  readCookie('boomio_session'),
    //       current_page_url: window.location.href,
    //     };
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //         }, body: JSON.stringify(data),
    //     })
    //     const res = await response.json()
    //     console.log('res' , res)
    // }

    // const readCookie = (name) => {
    //     return (name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1];
    // }

    useEffect(() => {
      getData()
    //   connectShop()
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