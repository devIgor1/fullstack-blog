import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination"

interface PaginationSectionProps {
  totalPosts: any
  postsPerPage: any
  currentPage: any
  setCurrentPage: any
}

export default function PaginationSection({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationSectionProps) {
  let pages = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        {currentPage === 1 ? (
          <PaginationItem></PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => handlePrevPage()}
            />
          </PaginationItem>
        )}

        {pages.map((page, idx) => (
          <PaginationItem
            key={idx}
            className={
              currentPage === page
                ? "bg-black rounded-md text-white cursor-pointer"
                : "cursor-pointer"
            }
          >
            <PaginationLink onClick={() => setCurrentPage(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage === pages.length ? (
          <PaginationItem></PaginationItem>
        ) : (
          <PaginationNext
            className="cursor-pointer"
            onClick={() => handleNextPage()}
          />
        )}
      </PaginationContent>
    </Pagination>
  )
}
