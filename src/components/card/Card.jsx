import React from 'react'
import Swal from 'sweetalert2'



const Card = ({ image, title, description, price, index, data }) => {


    function addToCart() {

        console.log('Item Add To Cart', data[index]);
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-right",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Item Add To Cart successfully"
          });

    }


    return (
        <>
            <div className="card card-compact w-[20%] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className='w-[%]' /></figure>
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