import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function BookCardLoader() {
  return (
    <>
      <div className="container">
        <div>
          <Skeleton></Skeleton>
        </div>
      </div>
    </>

    // <SkeletonTheme baseColor="#90defd" highlightColor="#00a2e2">
    //     <div style={{ height: "100px" }}>
    //       <Skeleton width={"100%"} height={"100%"} />
    //     </div>
    //     <br></br>
    //     <Skeleton width={"10%"} />
    //     <Skeleton count={2} width={"100%"} />
    //   </div>
    // </SkeletonTheme>
  );
}

export default BookCardLoader;
