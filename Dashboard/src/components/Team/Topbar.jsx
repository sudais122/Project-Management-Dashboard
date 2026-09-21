import React from "react";

import { TeamSearch } from "./Search";
import Filter from "./Filter";

const Topbar = ({
  search,
  setSearch,
  role,
  setRole,
}) => {
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <div className="min-w-60 flex-1">
        <TeamSearch
          search={search}
          setSearch={setSearch}
        />
      </div>

      <Filter
        role={role}
        setRole={setRole}
      />
    </div>
  );
};

export default Topbar;