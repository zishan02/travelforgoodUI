'use client';
export default async function ServiceCall(data :any) {

const temp=data;
let url="";
console.log(temp);

        try {

            if(data.trainbw==true){
                url= "http://103.93.16.19:33291/api-0.0.1-SNAPSHOT/trainbw?from="+temp.from+"&to="+temp.to+"&dateOfJourney="+temp.date;
            }else if(data.fromPnr==true){
                url= "http://103.93.16.19:33291/api-0.0.1-SNAPSHOT/pnrStatus?pnr="+temp.pnrNo;
            }

            const response=await fetch(url);
            const result = await response.json();
            return result;
          

        } catch (err) {

            console.log(err);
        }

    
}