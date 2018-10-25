import React from "react";
import { Link } from "gatsby";

export default (newsPosts) => {
  let index = [];
  for (const year in newsPosts) {
    const posts = newsPosts[year];
    index.push(yearlyFoldableIndex(year, posts));
  }
  return (
    <ul>
      {index}
    </ul>
  )
}

function yearlyFoldableIndex(year, posts) {
  const yearlyPosts = posts.map((post,i) => {
    const { frontmatter: {title, date} } = post;
    return <li key={i}><Link to={`/news#${date}`}>{title}</Link></li>
  });

  return (
    <li key={year}>
      <h2>{year}</h2>
      <ul>
        {yearlyPosts}
      </ul>
    </li>
  );
}