import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./layout/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blogins",
  description: "A complete blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
