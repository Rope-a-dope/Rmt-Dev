import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PageDirection } from "../lib/types";
import {
  useCurrentPage,
  useJobItemsActions,
  useTotalPages,
} from "../stores/jobItemsStore";

export default function PaginationControls() {
  const currentPage = useCurrentPage();
  const totalPages = useTotalPages();
  const { changePage } = useJobItemsActions();

  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="prev"
          currentPage={currentPage}
          onClick={() => changePage("prev")}
        />
      )}
      {currentPage < totalPages && (
        <PaginationButton
          direction="next"
          currentPage={currentPage}
          onClick={() => changePage("next")}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  direction: PageDirection;
  currentPage: number;
  onClick: () => void;
};

function PaginationButton({
  direction,
  currentPage,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "prev" && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}
      {direction === "next" && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
