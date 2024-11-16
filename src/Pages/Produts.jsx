import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Bar from '../NavbarComponent/Bar'
import Bar1 from '../NavbarComponent/Bar1'
import { useNavigate } from 'react-router-dom'
function Produts() {
    const [data,setData]=useState([])
    const Navigate = useNavigate()
    const productData=async()=>{
        const Response = await axios.get("http://localhost:4100/product")
        setData(Response.data)
    }
    useEffect(()=>{
productData()
    },[])
  return (
    <div>
    <Bar1/>
    <h1 className='w-full text-center text-3xl font-bold p-6'>Products</h1>


      <div className="bg-gray-100 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  place-items-center  mt-5">
        {
            data.map((item)=>{
                return(
                    <div>
                        <div className="p-2 bg-white mt-2 shadow-sm  cursor-pointer h-[350px] w-[300px] flex flex-col  rounded-lg">
              <div className="overflow-hidden flex justify-center">
                <img
                 onClick={()=>Navigate(`/detail/${item.id}`)}
                  className=" object-cover duration-150 transition-all hover:scale-110 overflow-hidden 
        h-[250px] w-[250px] rounded-lg
        "
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 mt-2 ml-4 mr-4">
                <div className="font-bold "> {item.name}</div>
                <div className="flex justify-between">
                  <div className=" font-bold text-gray-300">{item.brand}</div>
                  <div className="text-black font-bold">
                    {" "}
                    Price: {item.price}
                  </div>
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

export default Produts
