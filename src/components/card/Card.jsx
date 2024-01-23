import React from 'react'
const Card = ({ image, title, description, price, index }) => {


    function addToCart() {
        console.log('Item Add To Cart', index);
    }

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!</p>
                    <p>1{price}Rs</p>
                    <div className="card-actions justify-end">
                        <button onClick={addToCart} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card