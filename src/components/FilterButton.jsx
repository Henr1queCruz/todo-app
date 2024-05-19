export default function FilterButton({
  filter,
  filterStatus,
  onFilterStatus,
  children,
}) {
  return (
    <button
      onClick={() => onFilterStatus(filter)}
      className={
        filterStatus === filter
          ? 'text-brightBlue'
          : 'hover:text-lightTheme-veryDarkGrayishBlue dark:hover:text-darkTheme-lightGrayishBlue'
      }
    >
      {children}
    </button>
  );
}
