import React from "react";
import Axios from "../../Components/Utils/Axios";
import BookCardLoader from "../../Components/BookCard/BoodCardLoader";
import BookCard from "../../Components/BookCard/BookCard";
import { useState, useEffect } from "react";
function Home(props) {
  const [trendingBooks, setTrendingBooks] = useState(null);
  useEffect(() => {
    // Axios.get("trending").then((res) => {
    // console.log(res.data.payLoad);
    //   setTrendingBooks(res.data.payLoad);
    // });
  }, []);
  return (
    <>
      <div className="mt-5 bg-dark container">
        <div
          className="bg-light"
          style={{ width: "100%", height: "50px" }}
        ></div>
      </div>
    </>
  );
}

export default Home;
