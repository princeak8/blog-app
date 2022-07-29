import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import photo from "../assets/photo.jpg";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;
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
  text-align: left;
  line-height: 35px;
`;

function FullBlogPost(props) {
  const location = useLocation();
  const {
    comments,
    comments_count,
    content,
    coverImage,
    created_at,
    edited,
    preview,
    published,
    published_at,
    tags,
    title,
    views_count,
    visible,
  } = location.state;

  return (
    <PostContainer>
      <PostTitle>
        <h2>{title}</h2>
        <span>{`Posted ${created_at} by Aigars`}</span>
      </PostTitle>

      <Image src={coverImage.url} alt="photo of a post" />

      <PostText>{content}</PostText>

      <hr />
    </PostContainer>
  );
}

export default FullBlogPost;
