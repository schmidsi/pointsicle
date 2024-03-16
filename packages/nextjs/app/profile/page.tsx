"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { Button } from "~~/components/ui/button";

const Profile: NextPage = () => {

 



    return (

      <>


        <div>
          <h2 className="text-4xl font-bold tracking-tight">Your Participations</h2>
          <p className="text-xl text-muted-foreground">
            List of existing campaign participations
          </p>
        </div>
        <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


          <Link href={`profile/participation/a`}>
            <div className="card bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
              <div className="card-content p-6">
                <h2 className="card-title text-2xl font-bold text-gray-700 mb-2">Campaign 1</h2>
                <p className="text-gray-600 mb-4">
                  This is a description of the first campaign. It provides some details about the campaign.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Points: 120/200</span>
                    <span className="text-gray-700 font-semibold">Participants: 150</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3 dark:bg-gray-700">
                    <div
                      className={`${true ? 'bg-stone-400' : 'bg-green-400'} h-3 rounded-full`}
                      style={{
                        width: "60%",
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray
                    -500">Time left: 22h 15m</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href={`profile/participation/b`}>
            <div className="card bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
              <div className="card-content p-6">
                <h2 className="card-title text-2xl font-bold text-gray-700 mb-2">Campaign 2</h2>
                <p className="text-gray-600 mb-4">
                  This is a description of the second campaign. It provides some details about the campaign.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Points: 80/150</span>
                    <span className="text-gray-700 font-semibold">Participants: 200</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3 dark:bg-gray-700">
                    <div
                      className={`${true ? 'bg-stone-400' : 'bg-green-400'} h-3 rounded-full`}
                      style={{
                        width: "53%",
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Time left: 12h 30m</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>


        </section>


        {/* <div className="flex items-center flex-col flex-grow pt-10">
          <div className="px-5">
            <h1 className="text-center">
              <span className="block text-2xl mb-2">Welcome to</span>
              <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
            </h1>
            <div className="flex justify-center items-center space-x-2">
              <p className="my-2 font-medium">Connected Address:</p>
              <Address address={connectedAddress} />
            </div>
            <p className="text-center text-lg">
              Get started by editing{" "}
              <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
                packages/nextjs/app/page.tsx
              </code>
            </p>
            <p className="text-center text-lg">
              Edit your smart contract{" "}
              <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
                YourContract.sol
              </code>{" "}
              in{" "}
              <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
                packages/hardhat/contracts
              </code>
            </p>
          </div>
  
          <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
            <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                <BugAntIcon className="h-8 w-8 fill-secondary" />
                <p>
                  Tinker with your smart contract using the{" "}
                  <Link href="/debug" passHref className="link">
                    Debug Contracts
                  </Link>{" "}
                  tab.
                </p>
              </div>
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
                <p>
                  Explore your local transactions with the{" "}
                  <Link href="/blockexplorer" passHref className="link">
                    Block Explorer
                  </Link>{" "}
                  tab.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }



export default Profile;
