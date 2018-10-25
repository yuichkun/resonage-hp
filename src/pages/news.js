import React from "react"
import { graphql } from "gatsby" 
import renderNewsIndex from "../components/renderNewsIndex"
import renderNewsDetail from "../components/renderNewsDetail"

export default ({ data }) => {
  const newsPosts = groupNewsPosts(data);
  return (
    <div>
      <h1>News</h1>
      {renderNewsIndex(newsPosts)}
      {renderNewsDetail(findCurrentNewsDetail(newsPosts))}
    </div>
  );
};

function groupNewsPosts(data) {
  let newsPosts = {};
  const { allMarkdownRemark: { edges } } = data;
  edges.forEach(edge => {
    const { node : { frontmatter, html} } = edge;
    const { date } = frontmatter;
    const [year] = date.split('-');
    if (newsPosts[year] === undefined) {
      newsPosts[year] = [];
    }
    newsPosts[year].push({ frontmatter, html } );
  });
  return newsPosts;
}

function findCurrentNewsDetail(newsPosts) {
  let foundItem;
  const targetDate = window.location.hash.slice(1);
  for (const year in newsPosts) {
    newsPosts[year].forEach(post => {
      const { frontmatter: { date }, html } = post;
      if (date === targetDate) {
        foundItem = post;
      }
    });
  }
  return foundItem;
}

export const query = graphql`
{
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC}
  ) {
    edges {
      node {
        html
        frontmatter {
          title
          date
        }
      }
    }
  }
}
`


