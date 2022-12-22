import React from "react";

export default function Pagination({
  flightsPerPage,
  totalFlights,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFlights / flightsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2 flex flex-col gap-[8px]">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">
            {" "}
            {currentPage * flightsPerPage - 3}{" "}
          </span>
          to
          <span className="font-medium"> {currentPage * flightsPerPage} </span>
          of
          <span className="font-medium"> {totalFlights} </span>
          results
        </p>
      </div>
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            {pageNumbers.map((number) => (
              <a
                onClick={() => {
                  paginate(number);
                }}
                href="#"
                className={
                  currentPage === number
                    ? "bg-yellow-300 border-blue-500 text-blue-500 hover:bg-yellow-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-yellow-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}
