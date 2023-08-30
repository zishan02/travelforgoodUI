import Link from '@/node_modules/next/link'
import React from 'react'

const BottomBody = () => {
    return (
        <div className="container mx-auto bg-sky-900 w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-3 gap-4">
           <Link href="/pnr"><div >PNR Status</div> </Link>
           <Link href="../"><div>Train Bw Stations</div> </Link>
           <Link href="/train-details"><div>Train Details</div> </Link>
           <Link href="/train-route"><div>Train Route</div> </Link>
        </div>
        </div>
    )
}

export default BottomBody
