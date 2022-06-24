import React from "react";
import styled from "styled-components";
import photo from "../assets/photo.jpg";


const AboutContainer = styled.div`
  text-align: center;
  width: 60%;
`;

const AboutTitle = styled.div`
  height: 20px;
  margin-bottom: 40px;
  text-align: left;
`;

const AboutText = styled.div`
  text-align: justify;
  margin-top: 25px
`;

function AuthorInfo(props) {
  return (
    <AboutContainer>
      <AboutTitle>
        <h2>About Me</h2>
      </AboutTitle>
      <img src={photo} alt="photo of a post" height="250" width="100%" />

      <AboutText>
        All children, except one, grow up. They soon know that they will grow
        up, and the way Wendy knew was this.jgkksji
      </AboutText>
    </AboutContainer>
  );
}

export default AuthorInfo;
