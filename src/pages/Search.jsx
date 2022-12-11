import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import Posts from "../Posts";
import Pagination from "../Pagination";
import axios from "axios";
import CardSkeleton from "../components/CardSkeleton";

function Search() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const newRes = res.data.map((item) => ({
        ...item,
        isDescVisible: false,
      }));
      setPosts(newRes);
      setLoading(false);
    };

    fetchPosts();
  }, []);

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
