import { create } from "zustand";
import { JobItem, SortBy, PageDirection } from "../lib/types";
import { RESULTS_PER_PAGE } from "../lib/constants";

type JobItemsState = {
  jobItems: JobItem[] | undefined;
  currentPage: number;
  sortBy: SortBy;
  actions: {
    changePage: (direction: PageDirection) => void;
    changeSortBy: (newSortBy: SortBy) => void;
		setJobItems: (jobItems: JobItem[]) => void;
		getTotalResults: () => number;
		getTotalPages: () => number;
		getJobItemsSortedAndSliced: () => JobItem[];
  };
};

export const useJobItemsStore = create<JobItemsState>((set, get) => ({
  jobItems: [],
  currentPage: 1,
  sortBy: "relevant",
  actions: {
    changePage: (direction: PageDirection) => {
      if (direction === "next") {
        set((state) => ({
          currentPage: state.currentPage + 1,
        }));
      } else if (direction === "prev") {
        set((state) => ({
          currentPage: state.currentPage - 1,
        }));
      }
    },
    changeSortBy: (newSortBy: SortBy) => {
      set(() => ({
				currentPage: 1,
        sortBy: newSortBy,
      }));
    },
		setJobItems(jobItems) {
			set({ jobItems });
		},
		getTotalResults() {
			return get().jobItems?.length || 0;	
		},
		getTotalPages() {
			return (get().jobItems?.length || 0) / RESULTS_PER_PAGE;
		},
		getJobItemsSortedAndSliced() {
			const state = get();
			const jobItemsSorted = [...(state.jobItems || [])].sort((a, b) => {
        if (state.sortBy === "relevant") {
          return b.relevanceScore - a.relevanceScore;
        } else {
          return a.daysAgo - b.daysAgo;
        }
      });	
			return jobItemsSorted.slice(
        state.currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
        state.currentPage * RESULTS_PER_PAGE
      );
		},
  },
}));

export const useJobItems = () => useJobItemsStore((state) => state.jobItems);
export const useCurrentPage = () => useJobItemsStore((state) => state.currentPage);
export const useSortBy = () => useJobItemsStore((state) => state.sortBy);
export const useJobItemsActions = () => useJobItemsStore((state) => state.actions);
export const useTotalResults = () => useJobItemsStore((state) => state.actions.getTotalResults()); 
export const useTotalPages = () => useJobItemsStore((state) => state.actions.getTotalPages());
export const useJobItemsSortedAndSliced = () => useJobItemsStore((state) => state.actions.getJobItemsSortedAndSliced());