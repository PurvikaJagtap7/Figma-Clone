import { Work_Sans } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import { TooltipProvider } from "@/components/ui/tooltip";
import Room from "./Room";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "FigPro",
  description: "A minimalist Figma clone using fabric.js and Liveblocks for realtime collaboration",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider>
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <header className="flex justify-between">
        <h1 className="text-white font-bold text-2xl">FigPro</h1>
        <UserButton 
            showName={true}
            appearance={{
              elements: {
                userButtonBox: "flex items-center gap-2",
                userButtonOuterIdentifier: "text-white font-normal",
                userButtonTrigger: "text-white"
              }
            }}
          />
        </header>
        <main>
          <SignedOut>
            <SignIn routing="hash" />
          </SignedOut>
          <SignedIn>
            <Room>
              <TooltipProvider>{children}</TooltipProvider>
            </Room>
          </SignedIn>
        </main>
      </body>
    </html>
  </ClerkProvider>
);

export default RootLayout;