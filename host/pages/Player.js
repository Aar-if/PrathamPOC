import React from 'react'
import dynamic from 'next/dynamic';

function Player() {

  const Player = dynamic(() => import("reactapp/Player"), { ssr: false });

  return (
    <Player />
  )
}

export default Player