import React from "react";
import PropTypes from "prop-types";

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
  }).isRequired
};

export default function Article({ article }) {
  return (
    <div className="Article">
      <div className="Article-header">
        <h4 className="Article-title">{article.title}</h4>
        <h6 className="Article-byline">{article.author}</h6>
      </div>
      <p className="Article-content">{article.content}</p>
    </div>
  );
}
