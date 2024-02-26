import React from "react"
import Image from "next/image"
import Link from "next/link"

import { PiGithubLogoLight } from "react-icons/pi"
import { PiLinkedinLogoLight } from "react-icons/pi"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="bg-footer text-white py-6 px-4 mt-16">
      <div className="flex container justify-between">
        <div className="flex flex-row items-center">
          <div>
            <div className="text-2xl mb-3">Papers</div>
            <div className="text-sm">© 2024 Igor Moraes Rocha</div>
          </div>
        </div>
        <div className="flex">
          <a
            href="https://github.com/devIgor1"
            target="_blank"
            className="mr-3 hover:scale-105 duration-300"
          >
            <PiGithubLogoLight size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/igor-moraes-rocha/"
            target="_blank"
            className="hover:scale-105 duration-300"
          >
            <PiLinkedinLogoLight size={30} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
