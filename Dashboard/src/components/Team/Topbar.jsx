import React from 'react'
import { TasksSearch } from '../Tasks/Search'
import { TeamSearch } from './Search';
import Filter from './Filter'
const Topbar = () => {
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <div className="min-w-60 flex-1">
        <TeamSearch />
      </div>

      <Filter />
    </div>
  );
};

export default Topbar