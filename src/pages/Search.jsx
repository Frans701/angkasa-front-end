import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";
import axios from "axios";
import CardSkeleton from "../components/CardSkeleton";
import { useSearchParams, Link } from "react-router-dom";
import noData from "../assets/noData.webp";
import Buttom from "../components/Buttom";

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [flights, setFlight] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(3);
  let departure = searchParams.get("departure");
  let arrival = searchParams.get("arrival");
  let date = searchParams.get("date");
  let seatClass = searchParams.get("class");

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://angkasa-api-staging.km3ggwp.com/api/flights/search?departure=${departure}&arrival=${arrival}&date=${date}&class=${seatClass}`
      );
      setFlight(res.data.data.flights);
      setLoading(false);
    };

    fetchFlights();
  }, []);

  const indexOfLastFlights = currentPage * flightsPerPage;
  const indexOfFirstFlights = indexOfLastFlights - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlights, indexOfLastFlights);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <div className="px-[24px] xl:px-[80px]">
        <p className="mt-[32px] mb-[16px]">
          Displays the best {flights.length} flights at the best prices.
        </p>
        <div className="flex flex-col gap-[16px]">
          {loading && <CardSkeleton cards={10} />}

          {flights.length !== 0 ? (
            <Cards fligts={currentFlights} />
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
            totalFlights={flights.length}
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
