'use client'

import { useAccount } from "wagmi";

const ParticipationLayout = ({ children }: { children: React.ReactNode }) => {


  return (
    <div className="">
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default ParticipationLayout;
