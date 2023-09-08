
export default async function ServiceCall(data :any) {

const temp=data;
let url="";
console.log(temp);

        try {

            if(temp.trainbw==true){
                console.log("trainbw");
                url= "https://techlearnings.in/trainbw?from="+temp.from+"&to="+temp.to+"&dateOfJourney="+temp.date;
                console.log(url);
            }else if(data.fromPnr==true){
                url= "https://techlearnings.in/pnrStatus?pnr="+temp.pnrNo;
            }else if(data.getTrain=true){
                url= "https://techlearnings.in/getTrain?trainNo="+temp.trainNo;
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