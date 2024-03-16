'use client'

import { useAccount } from "wagmi";

const ParticipationLayout = ({ children }: { children: React.ReactNode }) => {
  const { address: connectedAddress } = useAccount();

  if (!connectedAddress) {
    return (
      <div className="w-full mx-auto flex justify-center">
        Wallet is not Connected.
      </div>
    )
  }

  if (connectedAddress) {

    return (
      <div className="">
        <div className="">
          {children}
        </div>
      </div>
    );

  }
};

export default ParticipationLayout;
