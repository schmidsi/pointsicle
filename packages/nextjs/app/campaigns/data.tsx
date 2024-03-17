"use client";

import Link from "next/link";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

// import { columns } from "./_components/columns"
// import { DataTable } from "./_components/data-table"
// import { UserNav } from "./_components/user-nav"
// import { taskSchema } from "./_data/schema"



const DashboardData = (data: any) => {
  const { address: connectedAddress } = useAccount();
  // const tasks = getTasks()

  
  let d = data
  // console.log(d.data.data.subgraphDeploymentSchemas);
  
  

  return (
    <>
      <div className="md:hidden">

      </div>

      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <header className="w-full mb-6">
          <h2 className="text-4xl font-bold tracking-tight mb-10">Explore Campaigns</h2>
          <div className="flex items-center bg-zinc-50 rounded-lg border border-zinc-200 mb-10">
            <span className="material-icons text-gray-500 px-3">search</span>
            <input
              className="w-full py-2 pr-3 text-gray-700 bg-transparent outline-none"
              placeholder="Search campaigns..."
              type="text"
            />
          </div>
        </header>
        <p className="text-lg text-muted-foreground">
          Top Campaigns
        </p>


        <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            d.data.data.subgraphDeploymentSchemas
            .filter((subgraph: any) => {

              return subgraph.manifest.deployment.activeSubgraphCount !== 0

            })
            .map((subgraph: any) => {
              
              console.log(subgraph);
              
              
              return  <Link href={`campaign/${subgraph.manifest.id}`}>
              <div className="card bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                <div className="card-content p-6">
                  <h2 className="card-title text-2xl font-bold text-gray-700 mb-2">{subgraph.manifest.deployment.versions[0].subgraph.metadata.displayName}</h2>
                  <p className="text-gray-600 mb-4">
                  {subgraph.manifest.deployment.versions[0].subgraph.metadata.description}
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
                      <span className="text-sm text-gray-500">{subgraph.manifest.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            })
          }
          
          
          
         

          {/* <Link href={`campaign/b`}>
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

          <div className="card bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
            <div className="card-content p-6">
              <h2 className="card-title text-2xl font-bold text-gray-700 mb-2">Campaign 3</h2>
              <p className="text-gray-600 mb-4">
                This is a description of the third campaign. It provides some details about the campaign.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Points: 200/200</span>
                  <span className="text-gray-700 font-semibold">Participants: 300</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3 dark:bg-gray-700">
                  <div
                    className={`${false ? 'bg-stone-400' : 'bg-green-400'} h-3 rounded-full`}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Time left: 5h 45m</span>
                </div>
              </div>
            </div>
          </div> */}
        </section>


        {/* <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Campaigns</h2>
            <p className="text-xl text-muted-foreground">
              Find top campaigns to complete for rewards.
            </p>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div> */}
        {/* <hr /> */}


        {/* <hr />
        <h2 className="text-2xl font-bold">Top Campaigns</h2>
        <p className="text-lg text-muted-foreground">
          Top Compaigns
        </p> */}

        {/* <DataTable data={tasks} columns={columns} /> */}
      </div>
    </>
  );
};

export default DashboardData;
