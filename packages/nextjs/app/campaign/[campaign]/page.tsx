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

import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { UserNav } from "./_components/user-nav"
import { taskSchema } from "./_data/schema"



const DashboardPage = ({params}: {
  params: {
    campaign: string
  }
}) => {
  const { address: connectedAddress } = useAccount();
  const tasks = getTasks()

  // Simulate a database read for tasks.
  function getTasks() {
    const data = `[
      {"id": "0x9aa1d963bdfea376171509ed70f53bfb38cf13ff", "points": 60},
      {"id": "0x722e43e019f3b6b35ad2489e628c81bf1825b8aa", "points": 963},
      {"id": "0x15470cd90042ab5ed260ebd607bb007a148664cf", "points": 296},
      {"id": "0x354c23eb8f70c8a54186eb10c7f3986c84a59cf6", "points": 247}
    ]`

    const tasks = JSON.parse(data.toString())

    return z.array(taskSchema).parse(tasks)
  }



  return (
    <>
      <div className="md:hidden">

      </div>
      <div className="hidden max-w-screen-xl w-full mt-16 mx-auto h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Campaign {params.campaign}</h2>
            <p className="text-xl text-muted-foreground">
              Complete these tasks to earn rewards
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* <UserNav /> */}
          </div>
        </div>
        {/* <hr /> */}

        <section className="w-full mb-10">
          <h2 className="text-2xl font-bold mb-5">Quests</h2>
          <p className="text-lg text-muted-foreground">
            Complete these quests to earn prizes
          </p>
          <div className="w-full rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden">
            <div className="flex justify-between items-center border-b-2 border-gray-200">
              <div className="w-full text-left p-5 focus:outline-none">
                <h3 className="font-semibold text-lg">Quest 1: Sign Up</h3>
                <p className="text-gray-500">Sign up to our platform to start earning points.</p>
              </div>
              <span className="pr-5 font-semibold">+100 Points</span>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-200">
              <div className="w-full text-left p-5 focus:outline-none">
                <h3 className="font-semibold text-lg">Quest 2: Complete Profile</h3>
                <p className="text-gray-500">Complete your profile to earn more points.</p>
              </div>
              <span className="pr-5 font-semibold">+200 Points</span>
            </div>
            <div className="flex justify-between items-center border-gray-200">
              <div className="w-full text-left p-5 focus:outline-none">
                <h3 className="font-semibold text-lg">Quest 3: Refer a Friend</h3>
                <p className="text-gray-500">Refer a friend to our platform and earn bonus points.</p>
              </div>
              <span className="pr-5 font-semibold">+300 Points</span>
            </div>
          </div>
        </section>
        <hr />
        <h2 className="text-2xl font-bold">Leaderboard</h2>
        <p className="text-lg text-muted-foreground">
          Top quest participants
        </p>

        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
};

export default DashboardPage;
