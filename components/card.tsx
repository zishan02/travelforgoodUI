import React from 'react'

const Card = (data: any) => {
    return (
       <div className="mx-auto w-full max-w-screen-xl "> { 
            data?.map ((at:any)=>(
            <div key="abc" className="max-w-screen-xl rounded overflow-hidden shadow-lg p-5 m-10">
            <div className="px-6 py-4">
              <div key={at.train_name} className="font-bold text-xl mb-2">{at.train_name}</div>
              <p key={at.source_stn_code} className="text-gray-700 text-base">
              {at.source_stn_code}
              </p>
              <p key={at.dstn_stn_code} className="text-gray-700 text-base">
              {at.dstn_stn_code}
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

export default Card
