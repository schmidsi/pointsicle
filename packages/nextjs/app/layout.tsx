import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import NavBar from "./navbar";
import { config } from '@/config'
import Web3ModalProvider from '@/context'
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;
const imageUrl = `${baseUrl}/thumbnail.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Scaffold-ETH 2 App",
    template: "%s | Scaffold-ETH 2",
  },
  description: "Built with 🏗 Scaffold-ETH 2",
  openGraph: {
    title: {
      default: "Scaffold-ETH 2 App",
      template: "%s | Scaffold-ETH 2",
    },
    description: "Built with 🏗 Scaffold-ETH 2",
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [imageUrl],
    title: {
      default: "Scaffold-ETH 2",
      template: "%s | Scaffold-ETH 2",
    },
    description: "Built with 🏗 Scaffold-ETH 2",
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
  },
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {

  const initialState = cookieToInitialState(config, headers().get('cookie'))


  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          {/* <ScaffoldEthAppWithProviders> */}
          <Web3ModalProvider initialState={initialState}>
            <div className="">
              <NavBar></NavBar>
              <div className="max-w-screen-xl w-full mt-16 mx-auto">
                {children}
              </div>
            </div>
            {/* </ScaffoldEthAppWithProviders> */}
          </Web3ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
