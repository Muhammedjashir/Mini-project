import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Bar1 from '../NavbarComponent/Bar1'

function Cart() {
    const Navigate = useNavigate()
    const [cart,setCart]=useState([])
    const Id=localStorage.getItem('id')

    const ShowDatas =async()=>{
     const Response = await axios.get(`http://localhost:4100/user/${Id}`)
     const Cartpage=Response.data.cart
     setCart(Cartpage)
    }
    useEffect(()=>{
        ShowDatas()
    },[])
    const RemoveItem = async (ids)=>{
        const dlt =cart.filter((item)=>item.id !== ids)
    const Res = await axios.patch(`http://localhost:4100/user/${Id}`,{cart:dlt})
    alert('Item Removed')
    ShowDatas();
    }
  return (
    <div>
      <div>
        <Bar1/>
        <h1 className='w-full font-bold p-6 text-center text-3xl'>Cart</h1>

        {
            cart.map((item)=>{
                return(
                    <div>
                         <div
                key={item.id}
                className="p-4 bg-white shadow-md rounded-lg flex flex-col md:flex-row justify-between items-center"
              >
                <div className="md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[250px] w-[250px] object-cover rounded-lg transition-all duration-150 hover:scale-110"
                  />
                </div>

                <div className="mt-4 md:mt-0 md:w-2/3 flex flex-col justify-between items-center md:items-start">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-500">{item.brand}</p>
                  <div className="flex justify-between w-full mt-4">
                    <p className="text-lg font-bold">Price: ${item.price}</p>
                    <p className="text-lg font-bold">Quantity: {item.qty}</p>
                  </div>

                  <div className="flex items-center space-x-2 mt-4">
                    <button
                      onClick={() => increment(item.id)}
                      className="bg-black text-white hover:bg-green-600 px-3 py-1 rounded"
                    >
                      +
                    </button>
                    <span className="px-3">{item.qty}</span>
                    <button
                      onClick={() => decrement(item.id)}
                      className="bg-black text-white hover:bg-red-600 px-3 py-1 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() => RemoveItem(item.id)}
                      className="bg-red-600 text-white hover:bg-red-700 px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Cart
