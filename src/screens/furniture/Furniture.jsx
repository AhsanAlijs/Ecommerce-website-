import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card';
import axios from 'axios';

const Furniture = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories/3/products')
            .then((res) => {
                // console.log(res.data);
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            {data.length > 0 ? (
                <div className='flex  justify-evenly flex-wrap gap-[10px]  bg-[#fff]'>
                    {data.map((item, index) => (
                        <Card key={index} title={item.title} image={item.images} description={`${item.description.slice(0, 50)}....`} price={item.price} index={index} data={data} />
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

export default Furniture