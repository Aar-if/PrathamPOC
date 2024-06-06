import React from 'react'
import dynamic from "next/dynamic";


const Sample = dynamic(() => import("reactapp/Sample"), { ssr: false });
const Dashboard = dynamic(() => import("../components/qumlPlayer"), {
  ssr: false,
});


function home() {
    
  return (
    <Dashboard />
   
  )
}

export default home