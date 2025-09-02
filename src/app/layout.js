import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import "./globals.css";



export const metadata = {
  title: "Habit Forge",
  description: "The simple way to forge yourself into who you want to become.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
        <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </head>
      <body className="flex flex-column bg-forge bg-no-repeat bg-center bg-cover h-screen w-screen justify-center items-center">
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
