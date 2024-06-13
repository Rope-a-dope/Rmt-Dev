import JobListSearch from "./JobListSearch";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarTop />
      <JobListSearch />
      <PaginationControls />
    </div>
  );
}

export function SidebarTop() {
  return (
    <div className="sidebar__top">
      <ResultsCount />
      <SortingControls />
    </div>
  );
}
