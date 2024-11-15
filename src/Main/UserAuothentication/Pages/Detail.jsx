import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Bar1 from "../NavbarComponent/Bar1";

function Detail() {
  const [detail, setDetail] = useState([]);
  const {id} = useParams();
  const Ids = localStorage.getItem("id");
  const productData = async () => {
    const Response = await axios.get(`http://localhost:4100/product`);
    const DetailPage = Response.data.filter((item) => item.id==id);
    console.log(DetailPage,'gdhsgsdjhgdsj');
    setDetail(DetailPage);
  };
  useEffect(() => {
    productData();
  }, []);

  const AddtoCart=async(data)=>{
    if(Ids){
       const Res=await axios.get(`http://localhost:4100/user/${Ids}`)
       const userCart=Res.data.cart
       const checkData = userCart.find((item)=>item.id===data.id)
       if(checkData){
        alert('product already exist')
       }else{
        const updateCart=[...userCart,data]
        const res=await axios.patch(`http://localhost:4100/user/${Ids}`,{cart:updateCart})
         alert('Added to Cart')
       }
    }else{
        alert('Plese Signin!')
        Navigate('/signin')
    }
  }
  return (
    <div>
        <Bar1/>
      <div className="h-[100%] flex justify-center items-center mt-5">
        {
        detail.map((item) => {
          return (
            <div>
              <div className=" p-2 bg-gray-100 mt-2 shadow-sm  cursor-pointer h-[450px] w-[500px] flex flex-col  rounded-lg">
                <div className="overflow-hidden flex justify-center">
                  <img
                    className=" object-cover duration-150 transition-all hover:scale-110 overflow-hidden 
        h-[250px] w-[250px] rounded-lg
        "
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 mt-20 ml-4 mr-4 ">
                  <div className="font-bold "> {item.name}</div>
                  <div className="flex justify-between">
                    <div className=" font-bold text-gray-300">{item.brand}</div>
                    <div className="text-black font-bold">
                      {" "}
                      Price: {item.price}
                    </div>
                  </div>
                  <div className='flex justify-between mt-5 mb-2'>
        
        <button onClick={()=>AddtoCart(item)} className='bg-black border border-white text-white rounded p-1 hover:bg-white hover:text-black'>Add to Cart</button>
        {/* <button onClick={()=>Navigate('/payment')} className='p-1 bg-black text-white rounded hover:bg-white hover:text-black'>Buy Now</button> */}
        </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
  );
}

export default Detail;
