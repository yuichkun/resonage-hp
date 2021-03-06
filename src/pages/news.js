import React from "react"
import { graphql } from "gatsby" 
import renderNewsIndex from "../components/renderNewsIndex"
import renderNewsDetail from "../components/renderNewsDetail"
import Layout from "../components/Layout";

export default ({ data }) => {
  const newsPosts = groupNewsPosts(data);
  return (
    <Layout>
      <h1>News</h1>
      {renderNewsIndex(newsPosts)}
      {renderNewsDetail(findCurrentNewsDetail(newsPosts))}
    </Layout>
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
  const windowIsDefined = typeof window !== "undefined";
  const targetDate = windowIsDefined ? window.location.hash.slice(1) : null;
  function isCurrentPost(post) {
    const { frontmatter: { date } } = post;
    if (date === targetDate) {
      foundItem = post;
    }
  }
  for (const year in newsPosts) {
    newsPosts[year].forEach(isCurrentPost);
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


