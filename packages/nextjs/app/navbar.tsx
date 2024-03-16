"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const NavBar: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      {/* <main className="bg-[#F3F4F6] min-h-screen"> */}
      {/* bg-yellow-300 */}
        <header className="flex items-center justify-between px-6 py-4 shadow-md">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800 mr-8">Pointsicle</div>
            <nav className="flex">
              <Link href="/campaigns" className="mx-3 text-gray-700 hover:text-gray-900">
                Campaings
              </Link>
              <Link href={`/profile`} className="mx-3 text-gray-700 hover:text-gray-900">
                Profile
              </Link>
            </nav>
          </div>
          
          <w3m-button />
        </header>
      {/* </main> */}


      {/* <NavigationMenu> */}
      {/* <NavigationMenuList> */}
      {/* <NavigationMenuItem> */}

      {/* <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent> */}
      {/* </NavigationMenuItem> */}
      {/* </NavigationMenuList> */}
      {/* </NavigationMenu> */}
    </>
  );
};

export default NavBar;
