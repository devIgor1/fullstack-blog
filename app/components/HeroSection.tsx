import React from "react"
import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="border-b bg-hero w-full">
      <section className="grid container grid-cols-1 sm:grid-cols-12 pt-6 pb-8">
        <div className="col-span-7 w-full place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-3xl sm:text-4xl md:text-6xl md:leading-normal font-softSans">
            Latest News for Busy Peeps
          </h1>
          <h2 className="mt-4">
            Stay up-to-date with the latest tech news and announcements.
          </h2>
          <ul>
            <li>
              <span className="mr-2">✔️</span>Industry News
            </li>
            <li>
              <span className="mr-2">✔️</span>Product Launches
            </li>
            <li>
              <span className="mr-2">✔️</span>Innovation Spotlights
            </li>
          </ul>
          <Link
            href="/blog/all"
            className="text-white block w-fit bg-indigo-500 px-4 py-2 sm:px-6 sm:py-4 mt-3 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] mx-auto md:mx-0 active:scale-90 duration-300 hover:scale-105"
          >
            Browse Articles
          </Link>
        </div>
        <div className="col-span-5 place-self-center">
          <Image
            src="/coffee-guy.png"
            width={300}
            height={300}
            alt="Person walking"
          />
        </div>
      </section>
    </div>
  )
}

export default HeroSection
