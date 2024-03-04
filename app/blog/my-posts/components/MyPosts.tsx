"use client"

import PaginationSection from "@/app/components/PaginationSection"
import { api } from "@/lib/api"
import { Post } from "@prisma/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { MdArrowOutward } from "react-icons/md"
import { RiDeleteBin5Line } from "react-icons/ri"
import { toast } from "sonner"

interface MyPostsProps {
  posts: Post[]
}

export default function MyPosts({ posts }: MyPostsProps) {
  const [search, setSearch] = useState<string>("")
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(3)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex)

  async function handleDeletePost(postId: number) {
    try {
      await api.delete("/api/post", {
        params: {
          id: postId,
        },
      })
      toast.success("Post deleted successfully")
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="px-4 py-6 md:px-6 lg:py-12">
        <div className="flex flex-col gap-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mx-auto">
                My Posts
              </h1>
            </div>
            <div className="flex items-center mb-10 mt-5">
              <input
                className="p-2 rounded-md w-[450px] md:w-[700px] outline-none bg-zinc-900 text-white placeholder:text-white/80"
                placeholder="Search posts..."
                type="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <CiSearch
                size={30}
                className="relative right-10"
                color="#FFFFFF"
              />
            </div>
          </div>

          {currentPosts
            .filter((post) => {
              return search.toLowerCase() === ""
                ? post
                : post.title.toLowerCase().includes(search)
            })
            .map((post) => (
              <div className="grid gap-6 md:gap-8 lg:gap-10" key={post.id}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0 relative group rounded-lg overflow-hidden w-full md:w-1/3">
                    {post.imgURL ? (
                      <Link href={`/blog/${post.id}`}>
                        <span className="sr-only">View</span>
                        <img
                          alt="Post"
                          className="object-cover w-full h-48 md:h-[250px] border-2 border-black"
                          src={post.imgURL?.toString()}
                        />
                      </Link>
                    ) : (
                      <div className="flex items-center justify-center flex-col h-full border-2">
                        <img
                          src="/nothumbnail.svg"
                          alt="thumbnail"
                          className="w-[200px] h-[200px]"
                        />
                        <h1 className="text-4xl">No thumbnail...</h1>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold leading-6">
                      {post.title}
                    </h2>
                    <p className="text-base text-gray-500 dark:text-gray-400 line-clamp-3 mt-5">
                      {post.content}
                    </p>
                    <div className="flex items-center mt-5 gap-2">
                      <div className="text-lg flex items-center gap-2 text-indigo-500 hover:underline">
                        <Link href={`/blog/${post.id}`} className=" ">
                          View post
                        </Link>
                        <MdArrowOutward size={20} />
                      </div>
                      <div className="border h-full border-zinc-700"></div>
                      <div className="flex items-center gap-2 text-red-500 text-lg hover:underline">
                        <button onClick={() => handleDeletePost(post.id)}>
                          Delete post
                        </button>
                        <RiDeleteBin5Line size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <PaginationSection
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
