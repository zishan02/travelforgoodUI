"use client";
import ServiceCall from '@/utils/index';
import { useSearchParams } from 'next/navigation'


export default async function Page() {
  const searchParams = useSearchParams();
  const from=searchParams.get('from');
  const to=searchParams.get('to');
  const date=searchParams.get('date');

  const data ={
    from ,
    to,
    date,
    trainbw:true
  };

  const temp=await ServiceCall(data);

//console.log(pathName);

console.log(temp);
 
return <h1>{temp.map((at:any)=>(
<li>{at.train_name}</li>

))}</h1>

}

