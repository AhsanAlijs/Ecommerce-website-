import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
const Miscellaneous = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories/5/products')
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
                <h1 className='text-center text-[#000] font-semibold'>Loading..</h1>
            )}
        </>
    )
}

export default Miscellaneous