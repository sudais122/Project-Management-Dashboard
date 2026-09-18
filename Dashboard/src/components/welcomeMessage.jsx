
import React from "react";

export const WelcomeMessage = () => {
  return (
    <div className="flex flex-col gap-1">
        <p className="font-bold text-2xl">Welcome, Rahi Khan</p>
      <p className="mt-1 text-sm text-gray-500">
        Three projects need your review this week, and the Marketing
        Campaign ships on Wednesday.
      </p>
    </div>
  );
};