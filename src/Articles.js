import React from "react";
import articles from "./articles.json";

import Article from "./Article";

export default function Articles() {
  return (
    <div className="Articles-list">
      {articles.articles.map(article => (
        <>
          <Article article={article} />
          <hr />
        </>
      ))}
    </div>
  );
}
