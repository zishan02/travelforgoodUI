"use client";
import { useRouter } from '@/node_modules/next/navigation';
import React, { useState } from 'react'

const RouteDetails = () => {
    const router = useRouter();
    const [train,setTrain]=useState("");

    const searchTrain =  (event: any)=>{
        event.preventDefault();
        if(train===""){
            alert("train no cannot be empty");
        }
        router.push("route/route-search?trainNo="+train);
         //response= await ServiceCall(data1);
       
    }
    return (
        <div className="m-5 p -10 max-w-screen-xl mx-auto ">
        <div className="max-w-2xl">
        <form >
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                
                    <div className="sm:col-span-3">
                        <label htmlFor="train-pnr" className="block text-sm font-medium leading-6 text-gray-900">Train No.</label>
                        <div className="mt-2">
                            <input type="text" value={train} onChange={({target})=>setTrain(target?.value)} name="pnr" id="pnr" autoComplete="given-pnr" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
              
      <div className="mt-2 flex items-center gap-x-3">
     <button  onClick={searchTrain} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Search</button>
      </div>
    </div> 
    </form></div>
    
    </div>
    )
}

export default RouteDetails
