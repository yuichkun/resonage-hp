import React from "react";

export default (post) => {
  return (
    <div>
      {post ? <div dangerouslySetInnerHTML={{ __html: post.html }} /> : null}
    </div>
  );
};