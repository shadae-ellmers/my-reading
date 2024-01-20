import './globals.css'
import { Space_Mono } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Login from '../components/Login'

const spaceMono = Space_Mono({
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
})

const spaceMonoBig = Space_Mono({
  weight: '700',
  subsets: ['latin'],
  style: 'normal',
})

export const metadata = {
  title: 'Readr',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-mywhite text-myblack">
      <UserProvider>
        <body className="flex flex-col min-h-screen justify-between">
          <div className={spaceMonoBig.className}>
            <nav className="bg-myblack text-myblack flex justify-between px-40">
              <a className="hover:opacity-50" href="/">
                <img
                  src="/readr-header-logo.png"
                  alt="readr logo"
                  className="h-36 py-3"
                />
              </a>
              <div className="flex items-center">
                <a
                  className="text-medium mx-2.5 rounded-3xl h-fit py-1.5 px-5 flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="text-medium mx-2.5 rounded-3xl h-fit py-1.5 px-5 flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
                  href="/shelves"
                >
                  Shelves
                </a>
                <Login />
              </div>
            </nav>
            <div className="bg-mywhite text-myblack relative h-auto justify-start">
              <div>{children}</div>
            </div>
            <footer className="bg-myblack text-mywhite px-40">
              <div className="flex flex-row w-full justify-between">
                <a href="/" className="hover:opacity-50">
                  <img
                    src="/readr-header-logo.png"
                    alt="readr logo"
                    className="h-36 py-3"
                  />
                </a>
                <div className="flex row-auto w-full justify-end">
                  <a
                    href="https://www.instagram.com/readrco/"
                    target="_blank"
                    className="flex justify-center py-0 my-auto  hover:opacity-50"
                  >
                    <img
                      src="/instagram.svg"
                      alt="instagram icon"
                      className="px-4"
                      width="70"
                    ></img>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="flex justify-center py-0 my-auto hover:opacity-50"
                  >
                    <img
                      src="/tiktok.svg"
                      alt="tiktok icon"
                      className="p-4"
                      width="70"
                    ></img>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="flex justify-center py-0 my-auto hover:opacity-50"
                  >
                    <img
                      src="/twitter.svg"
                      alt="twitter icon"
                      className="p-4"
                      width="70"
                    ></img>
                  </a>
                </div>
              </div>
              <div className="w-full h-1 bg-mywhite opacity-10"></div>
              <div className="w-full flex flex-row py-6 justify-between text-small">
                <p>©Copyright 2023 Readr</p>
                <div className="flex flex-row justify-end">
                  <a href="#" className="pr-4 hover:text-myred">
                    Privacy Policy
                  </a>
                  <a href="#" className="pl-4 hover:text-myred">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </UserProvider>
    </html>
  )
}
