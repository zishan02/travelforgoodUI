"use client";
import Trainbw from '@/components/trainbw'
import { useSearchParams } from '@/node_modules/next/navigation';
import ServiceCall from '@/utils/index';



export default async function Home() {

  const searchParams = useSearchParams();
  const trainNo=searchParams.get('trainNo');
  const data={
      trainNo:trainNo,
      getTrain:true
  }
const result=await ServiceCall(data);

  return (

<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="card rounded-none bg-gray-100 p-10 m-5">
    <h3 >Status of Train : {result.data.train_no}</h3>
    <table >
        
  <thead>
    <tr>
    <th>Train No.</th>
      <th>Train Name</th>
      <th>From</th>
      <th>To</th>
      <th>Type</th>
      <th>Travel Time</th>
      <th>Average Speed</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td>{result.data.train_no}</td>
      <td>{result.data.train_name}</td>
      <td>{result.data.from_stn_name}</td>
      <td>{result.data.to_stn_name}</td>
      <td>{result.data.type}</td>
      <td>{result.data.to_time}</td>
      <td>{result.data.average_speed}</td>
    </tr>
   
  </tbody>
</table>
</div></div>

  )
}


