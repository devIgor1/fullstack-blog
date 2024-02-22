import type { Metadata } from "next"
import "./globals.css"
import Header from "./layout/Header"

export const metadata: Metadata = {
  title: "Coffers",
  description: "A complete blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-publicSans">
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
