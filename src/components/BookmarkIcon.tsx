import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkActions, useBookmarkedIds } from "../stores/bookmarkStore";

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const bookmarkedIds = useBookmarkedIds(); 
  const {toggleBookmark} = useBookmarkActions();

  return (
    <button
      onClick={(e) => {
        toggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        className={`${bookmarkedIds.includes(id) && "filled"}`}
      />
    </button>
  );
}
