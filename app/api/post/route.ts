import { prisma } from "@/lib/db"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(request: NextRequest) {
  const session = await getServerSession()

  if (!session) {
    return NextResponse.json({ error: "NOT AUTHORIZED!" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const postId = searchParams.get("id")

  if (!postId) {
    NextResponse.json({ error: "Failed to delete post" }), { status: 400 }
  }

  try {
    await prisma.post.delete({
      where: {
        id: Number(postId),
      },
    })

    return NextResponse.json({ message: "Post deleted successfully" })
  } catch (error) {
    NextResponse.json({ error: "Failed to delete post" }), { status: 400 }
  }

  return NextResponse.json({ ok: true })
}
