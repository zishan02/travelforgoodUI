"use client";
import Spinner from '@/components/spinner';
import ServiceCall from '@/utils/index';
import { useSearchParams } from 'next/navigation'
import { useState } from 'react';

export default  async function Page() {

  const searchParams = useSearchParams();
  const pnr=searchParams.get('pnr');
  const data={
      pnrNo:pnr,
      fromPnr:true
  }
const result=await ServiceCall(data);

//console.log(result);
//console.log(result.trainDetails);


return  (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="card rounded-none bg-gray-100 p-10 m-5">
    <h3 >Status of PNR : {result.pnr}</h3>
    <h3 >Status of PNR : {result.error}</h3>
    <table className="table-auto m-5">
        
  <thead>
    <tr>
      <th>S.No</th>
      <th>Booking Status</th>
      <th>Current Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{result.passengerNo}</td>
      <td>{result.bookingStatus}</td>
      <td>{result.currentStatus}</td>
    </tr>
   
  </tbody>
</table>
</div></div>
)


}

