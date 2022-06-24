import React from "react";
import styled from "styled-components";
import photo from "../assets/photo.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
`;

const Info = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  gap: 10px;
`;

function RecentPost(props) {
  return (
    <Container>
      <Image src={photo} alt="photo of a post" />
      <Info>
        <span>Post Title</span>
        <span> - 12 Nov, 2015</span>
      </Info>
    </Container>
  );
}

export default RecentPost;
