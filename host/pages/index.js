import React from "react";
import dynamic from "next/dynamic";

const RemoteComponent = dynamic(() => import("remote/Index"), { ssr: false });



function Index() {

  return (
    <>
      <RemoteComponent />
    </>
  );
}

export default Index;