import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { useJobItems } from "../lib/hooks";
import { useBookmarkedIds } from "../stores/bookmarkStore";
import JobList from "./JobList";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const bookmarkedIds = useBookmarkedIds();
  const { jobItems, isLoading } = useJobItems(bookmarkedIds);

  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      <JobList jobItems={jobItems} isLoading={isLoading} />
    </div>,
    document.body
  );
});

export default BookmarksPopover;
