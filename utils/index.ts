
export default async function ServiceCall(data :any) {

const temp=data;
let url="";
console.log(temp);

        try {

            if(temp.trainbw==true){
                console.log("trainbw");
                url= "http://103.93.16.19:33291/api-0.0.1-SNAPSHOT/trainbw?from="+temp.from+"&to="+temp.to+"&dateOfJourney="+temp.date;
                console.log(url);
            }else if(data.fromPnr==true){
                url= "http://103.93.16.19:33291/api-0.0.1-SNAPSHOT/pnrStatus?pnr="+temp.pnrNo;
            }

            const response=await fetch(url);
            console.log(response);
            
            const result = await response.json();
            console.log(result);
            
            return result;
          

        } catch (err) {

            console.log(err);
        }

    
}