import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function BookCardLoader() {
  return (
    <SkeletonTheme baseColor="#90defd" highlightColor="#00a2e2">
      <div className="container d-flex bg-white p-4 mt-4 flex-column rounded">
        <div style={{ height: "500px" }}>
          <Skeleton width={"100%"} height={"100%"} />
        </div>
        <br></br>
        <Skeleton width={"10%"} />
        <Skeleton count={2} width={"100%"} />
      </div>
    </SkeletonTheme>
  );
}

export default BookCardLoader;
