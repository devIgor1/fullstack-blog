import Image from "next/image"
import Link from "next/link"
import back from "../../../public/backArrow.svg"

const page = async () => {
  return (
    <>
      <div className="container flex items-center justify-center">
        <Link
          href="/"
          className="mx-5 flex items-center justify-center hover:underline "
        >
          <Image
            src={back}
            width={100}
            height={100}
            alt="backArrow.svg"
            className="rotate-180"
          />
          <h1 className="text-4xl">Back to home</h1>
        </Link>
      </div>
      <div className="container"></div>
    </>
  )
}

export default page
