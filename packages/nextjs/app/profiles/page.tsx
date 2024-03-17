// const { address: connectedAddress } = useAccount();

// if (!connectedAddress) {
//   return (
//     <div className="w-full mx-auto flex justify-center">
//       Wallet is not Connected.
//     </div>
//   )
// }

// if (connectedAddress) {
// }

'use client'

import { redirect } from "next/navigation";
import { useAccount } from "wagmi";

const ProfilePage = () => {

  let { address } = useAccount()

  if (!address) {

    return (
      <div className="">
        <div className="">
          Please Connect a Wallet
        </div>
      </div>
    );
  }

  if (address) {
    redirect(`/profiles/${address}`)
  }
}

export default ProfilePage;
