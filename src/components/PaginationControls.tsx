import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useJobItemsContext } from "../lib/hooks";
import { PageDirection } from "../lib/types";

export default function PaginationControls() {
  const {currentPage, totalNumberOfPages, handleChangePage: onClick} = useJobItemsContext();

  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="prev"
          currentPage={currentPage}
          onClick={() => onClick("prev")}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButton
          direction="next"
          currentPage={currentPage}
          onClick={() => onClick("next")}
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