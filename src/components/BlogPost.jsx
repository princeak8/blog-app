import React from "react";
import { Link, useNavigate } from "react-router-dom";
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

function BlogPost({ postItem }) {
  const navigate = useNavigate();
  // console.log("postItem", postItem);
  return (
    <PostContainer>
      <PostTitle>
        <h2>{postItem.title}</h2>
        <span>{`Posted ${postItem.created_at} by Aigars`}</span>
      </PostTitle>

      <Image src={postItem.coverImage.url} alt="photo of a post" />

      <PostText>{postItem.content}</PostText>

      <ReadMore
        onClick={() => navigate(`posts/${postItem.id}`, { state: postItem })}
      >
        | Read more |
      </ReadMore>

      <hr />
    </PostContainer>
  );
}

export default BlogPost;
