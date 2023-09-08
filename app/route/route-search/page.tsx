"use client";
import Trainbw from '@/components/trainbw'
import { useSearchParams } from '@/node_modules/next/navigation';
import ServiceCall from '@/utils/index';



export default async function Home() {

  const searchParams = useSearchParams();
  const trainNo=searchParams.get('trainNo');
  const data={
      trainNo:trainNo,
      getRoute:true
  }
const result=await ServiceCall(data);

  return (
  <div className="mx-auto w-full max-w-screen-xl "> { 
    result.data?.map ((at:any)=>(
       <div key="abc" className="max-w-screen-xl rounded overflow-hidden shadow-lg p-5 m-10">
       <div className="px-6 py-4">
         <div key={at.source_stn_name} className="font-bold text-xl mb-2">{at.source_stn_name}</div>
         <p key={at.day} className="text-gray-700 text-base">
         {at.day}
         </p>
         <p key={at.arrive} className="text-gray-700 text-base">
         {at.arrive}
         </p>
       </div>
       <div className="px-6 pt-4 pb-2">
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={at.source_stn_name}>{at.source_stn_name}</span>
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
       </div>
     </div>
   )


   )

}</div>)
}


