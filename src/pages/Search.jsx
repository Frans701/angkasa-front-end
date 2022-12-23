import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";
import CardSkeleton from "../components/CardSkeleton";
import { useSearchParams, Link } from "react-router-dom";
import noData from "../assets/noData.webp";
import Buttom from "../components/Buttom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchFlight } from "../redux/actions/FlightAction";

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(3);
  let departure = searchParams.get("departure");
  let arrival = searchParams.get("arrival");
  let date = searchParams.get("date");
  let seatClass = searchParams.get("class");
  let passenger = searchParams.get("passenger");

  const dispatch = useDispatch();

  const { searchFlight } = useSelector((state) => state.flight);
  const { isFetching } = useSelector((state) => state.flight);

  useEffect(() => {
    dispatch(getSearchFlight(departure, arrival, date, seatClass));
  }, [dispatch]);

  const indexOfLastFlights = currentPage * flightsPerPage;
  const indexOfFirstFlights = indexOfLastFlights - flightsPerPage;
  const currentFlights = searchFlight.slice(
    indexOfFirstFlights,
    indexOfLastFlights
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <div className="px-[24px] xl:px-[80px]">
        <p className="mt-[32px] mb-[16px]">
          Displays the best {searchFlight.length} flights at the best prices.
        </p>
        <div className="flex flex-col gap-[16px]">
          {isFetching && <CardSkeleton cards={10} />}

          {searchFlight.length !== 0 ? (
            <Cards fligts={currentFlights} passenger={passenger} />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <img className="w-[240px]" src={noData} alt="" />
              <div className="flex flex-col items-center gap-[32px]">
                <div className="flex flex-col gap-[8px] items-center">
                  <h4 className="font-bold text-xl">No flights available</h4>
                  <p className="lg:text-base text-gray-500 text-sm text-center">
                    Tip: Change your search with a different date or cabin
                    class.
                  </p>
                </div>
                <Link to="/">
                  <Buttom color="yellow">Search Page</Buttom>
                </Link>
              </div>
            </div>
          )}

          <Pagination
            flightsPerPage={flightsPerPage}
            totalFlights={searchFlight.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
