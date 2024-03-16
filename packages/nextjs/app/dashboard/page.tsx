"use client";

import Link from "next/link";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "@/components/scaffold-eth";
import { Button } from "@/components/ui/button";


import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { UserNav } from "./_components/user-nav"
import { taskSchema } from "./_data/schema"



const  DashboardPage = () => {
  const { address: connectedAddress } = useAccount();
  const tasks = getTasks()

  // Simulate a database read for tasks.
  function getTasks() {
    const data = `[
      {
        "id": "TASK-8782",
        "title": "You can't compress the program without quantifying the open-source SSD pixel!",
        "status": "in progress",
        "label": "documentation",
        "priority": "medium"
      },
      {
        "id": "TASK-7878",
        "title": "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
        "status": "backlog",
        "label": "documentation",
        "priority": "medium"
      },
      {
        "id": "TASK-7839",
        "title": "We need to bypass the neural TCP card!",
        "status": "todo",
        "label": "bug",
        "priority": "high"
      },
      {
        "id": "TASK-5562",
        "title": "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
        "status": "backlog",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-8686",
        "title": "I'll parse the wireless SSL protocol, that should driver the API panel!",
        "status": "canceled",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-1280",
        "title": "Use the digital TLS panel, then you can transmit the haptic system!",
        "status": "done",
        "label": "bug",
        "priority": "high"
      },
      {
        "id": "TASK-7262",
        "title": "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
        "status": "done",
        "label": "feature",
        "priority": "high"
      },
      {
        "id": "TASK-1138",
        "title": "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
        "status": "in progress",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-7184",
        "title": "We need to program the back-end THX pixel!",
        "status": "todo",
        "label": "feature",
        "priority": "low"
      },
      {
        "id": "TASK-5160",
        "title": "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
        "status": "in progress",
        "label": "documentation",
        "priority": "high"
      },
      {
        "id": "TASK-5618",
        "title": "Generating the driver won't do anything, we need to index the online SSL application!",
        "status": "done",
        "label": "documentation",
        "priority": "medium"
      },
      {
        "id": "TASK-6699",
        "title": "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
        "status": "backlog",
        "label": "documentation",
        "priority": "medium"
      },
      {
        "id": "TASK-2858",
        "title": "We need to override the online UDP bus!",
        "status": "backlog",
        "label": "bug",
        "priority": "medium"
      },
      {
        "id": "TASK-9864",
        "title": "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
        "status": "done",
        "label": "bug",
        "priority": "high"
      },
      {
        "id": "TASK-8404",
        "title": "We need to generate the virtual HEX alarm!",
        "status": "in progress",
        "label": "bug",
        "priority": "low"
      },
      {
        "id": "TASK-5365",
        "title": "Backing up the pixel won't do anything, we need to transmit the primary IB array!",
        "status": "in progress",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-1780",
        "title": "The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!",
        "status": "todo",
        "label": "documentation",
        "priority": "high"
      },
      {
        "id": "TASK-6938",
        "title": "Use the redundant SCSI application, then you can hack the optical alarm!",
        "status": "todo",
        "label": "documentation",
        "priority": "high"
      },
      {
        "id": "TASK-9885",
        "title": "We need to compress the auxiliary VGA driver!",
        "status": "backlog",
        "label": "bug",
        "priority": "high"
      },
      {
        "id": "TASK-3216",
        "title": "Transmitting the transmitter won't do anything, we need to compress the virtual HDD sensor!",
        "status": "backlog",
        "label": "documentation",
        "priority": "medium"
      },
      {
        "id": "TASK-9285",
        "title": "The IP monitor is down, copy the haptic alarm so we can generate the HTTP transmitter!",
        "status": "todo",
        "label": "bug",
        "priority": "high"
      },
      {
        "id": "TASK-1024",
        "title": "Overriding the microchip won't do anything, we need to transmit the digital OCR transmitter!",
        "status": "in progress",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-7068",
        "title": "You can't generate the capacitor without indexing the wireless HEX pixel!",
        "status": "canceled",
        "label": "bug",
        "priority": "low"
      },
      {
        "id": "TASK-6502",
        "title": "Navigating the microchip won't do anything, we need to bypass the back-end SQL bus!",
        "status": "todo",
        "label": "bug",
        "priority": "high"
      },
      {
        "id": "TASK-5326",
        "title": "We need to hack the redundant UTF8 transmitter!",
        "status": "todo",
        "label": "bug",
        "priority": "low"
      },
      {
        "id": "TASK-6274",
        "title": "Use the virtual PCI circuit, then you can parse the bluetooth alarm!",
        "status": "canceled",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-1571",
        "title": "I'll input the neural DRAM circuit, that should protocol the SMTP interface!",
        "status": "in progress",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-9518",
        "title": "Compressing the interface won't do anything, we need to compress the online SDD matrix!",
        "status": "canceled",
        "label": "documentation",
        "priority": "medium"
      },
      {
        "id": "TASK-5581",
        "title": "I'll synthesize the digital COM pixel, that should transmitter the UTF8 protocol!",
        "status": "backlog",
        "label": "documentation",
        "priority": "high"
      },
      {
        "id": "TASK-2197",
        "title": "Parsing the feed won't do anything, we need to copy the bluetooth DRAM bus!",
        "status": "todo",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-8484",
        "title": "We need to parse the solid state UDP firewall!",
        "status": "in progress",
        "label": "bug",
        "priority": "low"
      },
      {
        "id": "TASK-9892",
        "title": "If we back up the application, we can get to the UDP application through the multi-byte THX capacitor!",
        "status": "done",
        "label": "documentation",
        "priority": "high"
      },
      {
        "id": "TASK-9616",
        "title": "We need to synthesize the cross-platform ASCII pixel!",
        "status": "in progress",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-9744",
        "title": "Use the back-end IP card, then you can input the solid state hard drive!",
        "status": "done",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-1376",
        "title": "Generating the alarm won't do anything, we need to generate the mobile IP capacitor!",
        "status": "backlog",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-7382",
        "title": "If we back up the firewall, we can get to the RAM alarm through the primary UTF8 pixel!",
        "status": "todo",
        "label": "feature",
        "priority": "low"
      },
      {
        "id": "TASK-2290",
        "title": "I'll compress the virtual JSON panel, that should application the UTF8 bus!",
        "status": "canceled",
        "label": "documentation",
        "priority": "high"
      },
      {
        "id": "TASK-1533",
        "title": "You can't input the firewall without overriding the wireless TCP firewall!",
        "status": "done",
        "label": "bug",
        "priority": "high"
      },
      {
        "id": "TASK-4920",
        "title": "Bypassing the hard drive won't do anything, we need to input the bluetooth JSON program!",
        "status": "in progress",
        "label": "bug",
        "priority": "high"
      },
      {
        "id": "TASK-5168",
        "title": "If we synthesize the bus, we can get to the IP panel through the virtual TLS array!",
        "status": "in progress",
        "label": "feature",
        "priority": "low"
      },
      {
        "id": "TASK-7103",
        "title": "We need to parse the multi-byte EXE bandwidth!",
        "status": "canceled",
        "label": "feature",
        "priority": "low"
      },
      {
        "id": "TASK-4314",
        "title": "If we compress the program, we can get to the XML alarm through the multi-byte COM matrix!",
        "status": "in progress",
        "label": "bug",
        "priority": "high"
      },
      {
        "id": "TASK-3415",
        "title": "Use the cross-platform XML application, then you can quantify the solid state feed!",
        "status": "todo",
        "label": "feature",
        "priority": "high"
      },
      {
        "id": "TASK-8339",
        "title": "Try to calculate the DNS interface, maybe it will input the bluetooth capacitor!",
        "status": "in progress",
        "label": "feature",
        "priority": "low"
      },
      {
        "id": "TASK-6995",
        "title": "Try to hack the XSS bandwidth, maybe it will override the bluetooth matrix!",
        "status": "todo",
        "label": "feature",
        "priority": "high"
      },
      {
        "id": "TASK-8053",
        "title": "If we connect the program, we can get to the UTF8 matrix through the digital UDP protocol!",
        "status": "todo",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-4336",
        "title": "If we synthesize the microchip, we can get to the SAS sensor through the optical UDP program!",
        "status": "todo",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-8790",
        "title": "I'll back up the optical COM alarm, that should alarm the RSS capacitor!",
        "status": "done",
        "label": "bug",
        "priority": "medium"
      },
      {
        "id": "TASK-8980",
        "title": "Try to navigate the SQL transmitter, maybe it will back up the virtual firewall!",
        "status": "canceled",
        "label": "bug",
        "priority": "low"
      },
      {
        "id": "TASK-7342",
        "title": "Use the neural CLI card, then you can parse the online port!",
        "status": "backlog",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-5608",
        "title": "I'll hack the haptic SSL program, that should bus the UDP transmitter!",
        "status": "canceled",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-1606",
        "title": "I'll generate the bluetooth PNG firewall, that should pixel the SSL driver!",
        "status": "done",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-7872",
        "title": "Transmitting the circuit won't do anything, we need to reboot the 1080p RSS monitor!",
        "status": "canceled",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-4167",
        "title": "Use the cross-platform SMS circuit, then you can synthesize the optical feed!",
        "status": "canceled",
        "label": "bug",
        "priority": "medium"
      },
      {
        "id": "TASK-9581",
        "title": "You can't index the port without hacking the cross-platform XSS monitor!",
        "status": "backlog",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-8806",
        "title": "We need to bypass the back-end SSL panel!",
        "status": "done",
        "label": "bug",
        "priority": "medium"
      },
      {
        "id": "TASK-6542",
        "title": "Try to quantify the RSS firewall, maybe it will quantify the open-source system!",
        "status": "done",
        "label": "feature",
        "priority": "low"
      },
      {
        "id": "TASK-6806",
        "title": "The VGA protocol is down, reboot the back-end matrix so we can parse the CSS panel!",
        "status": "canceled",
        "label": "documentation",
        "priority": "low"
      },
      {
        "id": "TASK-9549",
        "title": "You can't bypass the bus without connecting the neural JBOD bus!",
        "status": "todo",
        "label": "feature",
        "priority": "high"
      },
      {
        "id": "TASK-1075",
        "title": "Backing up the driver won't do anything, we need to parse the redundant RAM pixel!",
        "status": "done",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-1427",
        "title": "Use the auxiliary PCI circuit, then you can calculate the cross-platform interface!",
        "status": "done",
        "label": "documentation",
        "priority": "high"
      },
      {
        "id": "TASK-1907",
        "title": "Hacking the circuit won't do anything, we need to back up the online DRAM system!",
        "status": "todo",
        "label": "documentation",
        "priority": "high"
      },
      {
        "id": "TASK-4309",
        "title": "If we generate the system, we can get to the TCP sensor through the optical GB pixel!",
        "status": "backlog",
        "label": "bug",
        "priority": "medium"
      },
      {
        "id": "TASK-3973",
        "title": "I'll parse the back-end ADP array, that should bandwidth the RSS bandwidth!",
        "status": "todo",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-7962",
        "title": "Use the wireless RAM program, then you can hack the cross-platform feed!",
        "status": "canceled",
        "label": "bug",
        "priority": "low"
      },
      {
        "id": "TASK-3360",
        "title": "You can't quantify the program without synthesizing the neural OCR interface!",
        "status": "done",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-9887",
        "title": "Use the auxiliary ASCII sensor, then you can connect the solid state port!",
        "status": "backlog",
        "label": "bug",
        "priority": "medium"
      },
      {
        "id": "TASK-3649",
        "title": "I'll input the virtual USB system, that should circuit the DNS monitor!",
        "status": "in progress",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-3586",
        "title": "If we quantify the circuit, we can get to the CLI feed through the mobile SMS hard drive!",
        "status": "in progress",
        "label": "bug",
        "priority": "low"
      },
      {
        "id": "TASK-5150",
        "title": "I'll hack the wireless XSS port, that should transmitter the IP interface!",
        "status": "canceled",
        "label": "feature",
        "priority": "medium"
      },
      {
        "id": "TASK-3652",
        "title": "The SQL interface is down, override the optical bus so we can program the ASCII interface!",
        "status": "backlog",
        "label": "feature",
        "priority": "low"
      },
      {
        "id": "TASK-6884",
        "title": "Use the digital PCI circuit, then you can synthesize the multi-byte microchip!",
        "status": "canceled",
        "label": "feature",
        "priority": "high"
      },
      {
        "id": "TASK-1591",
        "title": "We need to connect the mobile XSS driver!",
        "status": "in progress",
        "label": "feature",
        "priority": "high"
      },
      {
        "id": "TASK-3802",
        "title": "Try to override the ASCII protocol, maybe it will parse the virtual matrix!",
        "status": "in progress",
        "label": "feature",
        "priority": "low"
      },
      {
        "id": "TASK-7253",
        "title": "Programming the capacitor won't do anything, we need to bypass the neural IB hard drive!",
        "status": "backlog",
        "label": "bug",
        "priority": "high"
      },
      {
        "id": "TASK-9739",
        "title": "We need to hack the multi-byte HDD bus!",
        "status": "done",
        "label": "documentation",
        "priority": "medium"
      },
      {
        "id": "TASK-4424",
        "title": "Try to hack the HEX alarm, maybe it will connect the optical pixel!",
        "status": "in progress",
        "label": "documentation",
        "priority": "medium"
      },
      {
        "id": "TASK-3922",
        "title": "You can't back up the capacitor without generating the wireless PCI program!",
        "status": "backlog",
        "label": "bug",
        "priority": "low"
      },
      {
        "id": "TASK-4921",
        "title": "I'll index the open-source IP feed, that should system the GB application!",
        "status": "canceled",
        "label": "bug",
        "priority": "low"
      },
      {
        "id": "TASK-5814",
        "title": "We need to calculate the 1080p AGP feed!",
        "status": "backlog",
        "label": "bug",
        "priority": "high"
      }
    ]`

    const tasks = JSON.parse(data.toString())

    return z.array(taskSchema).parse(tasks)
  }



  return (
    <>
      {/* <div>
        <Button>Click me</Button>
      </div> */}



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

      <div className="md:hidden">
        {/* <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        /> */}
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* <UserNav /> */}
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
};

export default DashboardPage;
