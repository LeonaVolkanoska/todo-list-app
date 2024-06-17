import React from "react";

function FilterTask({ filter, setFilter }) {
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <select
        className="filter-task"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      >
        <option value="all">All</option>
        <option value="completed">Finished Tasks</option>
        <option value="uncompleted">Ongoing Tasks</option>
      </select>
    </div>
  );
}
export default FilterTask;
