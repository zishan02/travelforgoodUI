"use client";
import ServiceCall from '@/utils/index';
import { useSearchParams } from 'next/navigation'

export default  async function Page() {
  const searchParams = useSearchParams();
  const pnr=searchParams.get('pnr');
  const data={
      pnrNo:pnr,
      fromPnr:true
  }
const result=await ServiceCall(data);
console.log(result);
//console.log(result.trainDetails);


return <h1>{result.trainDetails}</h1>

}

