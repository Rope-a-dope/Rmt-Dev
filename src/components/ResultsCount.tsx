import { useTotalResults } from "../stores/jobItemsStore";

export default function ResultsCount() {
  const totalResults = useTotalResults();

  return (
    <p className="count">
      <span className="u-bold">{totalResults}</span> results
    </p>
  );
}
