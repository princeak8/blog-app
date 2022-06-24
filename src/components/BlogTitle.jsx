import React from "react";
import styled from "styled-components";

const BlogHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  align-items: center;
  height: 150px;
  line-height: 20px;
  padding: 10px;
`;

function BlogTitle(props) {
  return (
    <BlogHeader>
      <h1>Blog Title</h1>
      <span>Blog motto can be added here</span>
    </BlogHeader>
  );
}

export default BlogTitle;
