import { create } from "zustand";
import { persist } from "zustand/middleware";

type BookmarkState = {
  bookmarkedIds: number[];
  actions: {
    toggleBookmark: (id: number) => void;
  };
};

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set) => ({
      bookmarkedIds: [],
      bookmarkedJobItems: [],
      actions: {
        toggleBookmark: (id: number) => {
          set((state) => ({
            bookmarkedIds: state.bookmarkedIds.includes(id)
              ? state.bookmarkedIds.filter((item) => item !== id)
              : [...state.bookmarkedIds, id],
          }));
        },
      },
    }),
    {
      name: "bookmarks",
      partialize: (state) => ({
        bookmarkedIds: state.bookmarkedIds,
      }),
    }
  )
);

export const useBookmarkedIds = () => useBookmarkStore((state) => state.bookmarkedIds);
export const useBookmarkActions = () => useBookmarkStore((state) => state.actions);
