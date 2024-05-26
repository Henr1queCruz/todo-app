import FilterButton from './FilterButton';

export default function GroupFilterButton({
  filterStatus,
  handleFilterStatus,
}) {
  return (
    <>
      <FilterButton
        filter="all"
        filterStatus={filterStatus}
        onFilterStatus={handleFilterStatus}
      >
        All
      </FilterButton>
      <FilterButton
        filter="active"
        filterStatus={filterStatus}
        onFilterStatus={handleFilterStatus}
      >
        Active
      </FilterButton>
      <FilterButton
        filter="completed"
        filterStatus={filterStatus}
        onFilterStatus={handleFilterStatus}
      >
        Completed
      </FilterButton>
    </>
  );
}
