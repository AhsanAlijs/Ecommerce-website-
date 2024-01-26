import React from 'react'
const Card = ({ image, title, description, price, index, data }) => {


    function addToCart() {
        console.log('Item Add To Cart',data[index]);
    }

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>{price}Rs</p>
                    <div className="card-actions justify-end">
                        <button onClick={addToCart} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card