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
      {trendingBooks === null && <BookCardLoader />}
      {trendingBooks !== null && trendingBooks.length === 0 && (
        <div className="bg-white display-5 py-3 my-3 container rounded">
          <center>
            <span>No Auctions Going On</span>
            <br></br>
            😐😐😐
          </center>
        </div>
      )}
      {/* <span className="display-5 px-5 my-3">On-Going Auctions</span> */}
      <div className="container-fluid d-flex justify-content-center flex-column mt-3">
        {trendingBooks !== null &&
          trendingBooks.map((data, index) => (
            <BookCard
              key={index}
              title={data.item_name}
              desc={data.item_desc}
              price={data.start_price}
              image={data.item_image}
              id={data.bid_id}
              home
            ></BookCard>
          ))}

        {/* <WS></WS> */}
      </div>
    </>
  );
}

export default Home;
