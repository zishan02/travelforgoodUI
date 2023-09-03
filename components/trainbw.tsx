"use client";



import { useRouter } from '@/node_modules/next/navigation';
import React, { useEffect, useState } from 'react'



const Trainbw = () => {
const [from ,setFrom] = useState("");
    const [to ,setTo] = useState("");
    const [date ,setDate] = useState("");
    const router=useRouter();
   
    const handleSubmit = async (event: any)=>{
   
         event.preventDefault();
        if(from =='' || from==null){
            alert("From cannot be Empty")
        }
        if(to =='' || to==null){
            alert("To cannot be Empty")
        }
        if(date =='' || date==null){
            alert("Date cannot be Empty")
        }
        const data={
            from,
            to,
            date
        }
        console.log("Inside Handle Submit");
        console.log(from);
        router.push("/search-trains?from="+from+"&to="+to+"&date="+date);
        
        
     
    
    }
        //const trains=await ServiceCall(data);
   
  

    return (
        <div className="bg-blue-900">
            <form >
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="train-from" className="block text-sm font-medium leading-6 text-gray-900">From</label>
                            <div className="mt-2">
                                <input type="text" value={from} onChange={({target})=>setFrom(target?.value)} name="train-from" id="train-from" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="train-to" className="block text-sm font-medium leading-6 text-gray-900">To</label>
                            <div className="mt-2">
                                <input type="text"  value={to} onChange={({target})=>setTo(target?.value)} name="train-to" id="train-to" autoComplete="abc" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                    <label htmlFor="travel-date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                    <div className="mt-2">
                                <input type="date" value={date} onChange={({target})=>setDate(target?.value)} name="travel-date" id="travel-date" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" />
                            </div>
                        </div>
                    </div>   
                    <div className="col-span-full">
          <div className="mt-2 flex items-center gap-x-3">
         <button  onClick={handleSubmit} type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Search</button>
          </div>
        </div> 
                </div>
            </form>
        </div>
    )
    }

export default Trainbw


