import React from "react";
import styled from "styled-components";
import RecentPost from "./RecentPost";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-around;
  width: 60%;
`;

const Title = styled.div`
  color: grey;
  height: 20px;
  margin-bottom: 40px;
  text-align: left;
`;

function RecentPosts(props) {
  return (
    <Container>
      <Title>
        <h2>RECENT POSTS</h2>
      </Title>
      <RecentPost />
      <RecentPost />
      <RecentPost />
      <RecentPost />
    </Container>
  );
}

export default RecentPosts;
