import React from 'react'
import dynamic from 'next/dynamic';

function Observation() {

    const Observation = dynamic(() => import("reactapp/Observation"), { ssr: false });

  return (
    <Observation/>
  )
}

export default Observation