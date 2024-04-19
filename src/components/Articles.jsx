import React from "react";
import Article from "./Article";
import { articleData } from "../data/data.js";

function Articles() {
  return (
    <div>
      {articleData.map((data) => {
        console.log({ ...data });
        return <Article key={crypto.randomUUID()} {...data} />;
      })}
    </div>
  );
}

export default Articles;
