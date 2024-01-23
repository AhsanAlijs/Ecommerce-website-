import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/card/Card'
import Navbar from './components/navbar/Navbar'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <>
      <Navbar />
      {data.length > 0 ? (
        <div className='flex  justify-evenly flex-wrap gap-[10px]  bg-[#fff]'>
          {data.map((item, index) => (
            <Card key={index} title={item.title} image={item.images} description={item.description} price={item.price} index={index} />
          ))}
        </div>
      ) : (
        <h1 className='text-center text-[#000] font-semibold'>Loading..</h1>
      )}

    </>
  )
}

export default App