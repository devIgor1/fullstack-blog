import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"
import { AuthProvider } from "@/providers/auth"

export const metadata: Metadata = {
  title: "Papers",
  description: "A full-stack blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="font-pally bg-primary">
          <Header />
          <main>{children}</main>
        </body>
      </AuthProvider>
    </html>
  )
}
