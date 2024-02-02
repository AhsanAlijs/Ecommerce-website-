import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card';
import axios from 'axios';

const Shoes = () => {
    const [clothes, setClothes] = useState([]);
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories/4/products')
            .then((res) => {
                // console.log(res.data);
                setClothes(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            {clothes.length > 0 ? (
                <div className='flex  justify-evenly flex-wrap gap-[10px]  bg-[#fff]'>
                    {clothes.map((item, index) => (
                        <Card key={index} title={item.title} image={item.images} description={item.description} price={item.price} index={index} />
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center h-[90vmin]'>
                    <h1 className='text-center text-[#000] bg-[white]  font-semibold'><span className="loading loading-infinity loading-lg text-[#426ea1]"></span></h1>
                </div>
            )}
        </>
    )
}

export default Shoes