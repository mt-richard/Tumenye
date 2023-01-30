import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
const [modal, setModal] = useState(true)

useEffect(()=>{
    window.scrollTo(0,0)
})

function hideModal(){
    setModal(true)
}

    return (
        <div>
          
            <>
            <div className="z-0 w-full h-[800px] md:h-[100vh]  bg-gray-900"></div>
            <div className="z-10 absolute top-20 md:w-1/4 md:ml-[calc(50%-13rem)] log bg-gray-200 p-5 pb-10 mt-28 md:mt-20 ml-8 rounded">
                <div className="flex pb-5 justify-between head">
                    <span></span>
                    <span onClick={hideModal} className="hidden md:block text-3xl cursor-pointer hover:text-red-800 text-gray-600">&times;</span>
                </div>
            <form method="post" className="w-full">

                <h3 className="uppercase pb-5 border-b border-gray-400 font-bold text-gray-600 text-xl text-center">Injira Kuri Konti</h3>

                    
                    <div className="pt-5 p-2">
                        <label htmlFor="" className="text-[14px] font-light pb-2 ">Username</label>
                        <input type="email" name="email" placeholder="Type Your Username" className="w-full rounded p-2 pl-5 outline-none text-light text-gray-400" />
                    </div>
                    <div className="p-2">
                        <label htmlFor="" className="text-[14px] font-light text-gray-600 pb-2 ">Password</label>
                        <input type="password" name="passowrd" placeholder="**************" className="w-full rounded p-2 pl-5 outline-none text-light text-gray-400" />
                    </div>
                    <div className="p-2 pl-10 pr-10">
                        <input type="submit" value="Injira" className="bg-[#Bd2c4b] pl-5 pr-5 pt-2 pb-2 rounded text-white font-bold hover:pl-5 hover:text-gray-200 w-full" />
                    </div>

                </form>
                <p className="text-[14px] w-full text-center">Nta konti ufite? <Link to="/" className="font-bold text-[#Bd2c4b]">Yifungure</Link></p>
            </div>
            </>
            
        </div>
    )
}

export default Login;