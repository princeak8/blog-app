import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import photo from "../assets/photo.jpg";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;
`;

const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
`;

const Image = styled.img`
  height: 400px;
  width: 100%;
`;

const PostText = styled.div`
  margin-top: 20px;
  text-align: justify;
`;

const ReadMore = styled.div`
  font-weight: 400;
  margin: 20px;
  cursor: pointer;
`;

function BlogPost(props) {
  return (
    <PostContainer>
      <PostTitle>
        <h2>Post Title</h2>
        <span>Posted on October 5, 2016 by Aigars</span>
      </PostTitle>

      <Image src={photo} alt="photo of a post" />

      <PostText>
        All children, except one, grow up. They soon know that they will grow
        up, and the way Wendy knew was this.jgkksji
      </PostText>

      <ReadMore>| Read more |</ReadMore>

      <hr />
    </PostContainer>
  );
}

export default BlogPost;
