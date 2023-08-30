"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const PNRSearch =  () => {
const router = useRouter();
    const [pnr,setPnr]=useState("");

    const searchPNR =  (event: any)=>{
        event.preventDefault();
        if(pnr===""){
            alert("PNR cannot be empty");
        }
        router.push("/pnr/pnr-search?pnr="+pnr);
         //response= await ServiceCall(data1);
       
    }
   
    return (
        <div>
            <div className="container mx-auto bg-sky-500">
            <form >
                <div className="space-y-12">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="train-pnr" className="block text-sm font-medium leading-6 text-gray-900">Pnr No.</label>
                            <div className="mt-2">
                                <input type="text" value={pnr} onChange={({target})=>setPnr(target?.value)} name="pnr" id="pnr" autoComplete="given-pnr" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
          <div className="mt-2 flex items-center gap-x-3">
         <button  onClick={searchPNR} type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Search</button>
          </div>
        </div> 
        </form></div>
        
        </div>
    ) 
}

export default PNRSearch
