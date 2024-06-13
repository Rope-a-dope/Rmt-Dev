import { create } from "zustand";

type SearchState = {
  searchText: string;
	debouncedSearchText: string;
  actions: {
    setSearchText: (text: string) => void;
  };
};

let debounceTimeout: ReturnType<typeof setTimeout>;

export const useSearchStore = create<SearchState>((set) => ({
  searchText: "",
	debouncedSearchText: '',
  actions: {
		setSearchText: (text: string) => {
			set({ searchText: text });
	
			if (debounceTimeout) {
				clearTimeout(debounceTimeout);
			}
	
			debounceTimeout = setTimeout(() => {
				set({ debouncedSearchText: text });
			}, 250);
		},
  },
}));

export const useSearchText = () => useSearchStore((state) => state.searchText);
export const useDebouncedSearchText = () => useSearchStore((state) => state.debouncedSearchText);
export const useSearchActions = () => useSearchStore((state) => state.actions);