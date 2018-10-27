import React from "react";
import { Link } from "gatsby";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';


export default (newsPosts) => {
  let index = [];
  const years = Object.keys(newsPosts).sort((a,b) => a < b);
  index = years.map(year => {
    const posts = newsPosts[year];
    return yearlyFoldableIndex(year, posts);
  });
  return (
    <Accordion>
      {index}
    </Accordion>
  )
}

function yearlyFoldableIndex(year, posts) {
  const yearlyPosts = posts.map((post,i) => {
    const { frontmatter: {title, date} } = post;
    return <li key={i}><Link to={`/news#${date}`}>{trimYear(date)} {title}</Link></li>
  });

  return (
    <AccordionItem key={year}>
      <AccordionItemTitle>{year}</AccordionItemTitle>
      <AccordionItemBody>
        <ul>
          {yearlyPosts}
        </ul>
      </AccordionItemBody>
    </AccordionItem>
  );
}

function trimYear(date) {
  return date.split('-').slice(1).join('.'); 
}