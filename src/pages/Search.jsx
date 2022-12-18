import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import Posts from "../Posts";
import Pagination from "../Pagination";
import axios from "axios";
import CardSkeleton from "../components/CardSkeleton";
import { useSearchParams, Link } from "react-router-dom";

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  let departure = searchParams.get("departure");
  let arrival = searchParams.get("arrival");
  let date = searchParams.get("date");
  let seatClass = searchParams.get("class");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://angkasa-api-staging.km3ggwp.com/api/flights/search?departure=${departure}&arrival=${arrival}&date=${date}&class=${seatClass}`
      );
      // const newRes = res.data.map((item) => ({
      //   ...item,
      //   isDescVisible: false,
      // }));
      setPosts(res.data.data.flights);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  console.log(posts);

  const toggleDesc = (id) => {
    const newPosts = posts.map((post) =>
      post.id === id ? { ...post, isDescVisible: !post.isDescVisible } : post
    );
    setPosts(newPosts);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(currentPosts);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <div className="px-[24px] xl:px-[80px]">
        <p className="mt-[32px] mb-[16px]">
          Menampilkan 49 penerbangan terbaik dengan harga terbaik.
        </p>
        <div className="flex flex-col gap-[16px]">
          {loading && <CardSkeleton cards={10} />}

          <Cards posts={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
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
