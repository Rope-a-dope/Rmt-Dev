import { useSearchQuery } from "../lib/hooks";
import { useJobItemsSortedAndSliced } from "../stores/jobItemsStore";
import { useDebouncedSearchText } from "../stores/searchStore";
import JobList from "./JobList";

export default function JobListSearch() {
  const debouncedSearchText = useDebouncedSearchText();
  const { isLoading } = useSearchQuery(debouncedSearchText);
  const jobItemsSortedAndSliced = useJobItemsSortedAndSliced();

  return <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />;
}
