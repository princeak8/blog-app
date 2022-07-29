import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import BlogTitle from "./components/BlogTitle";
import ImageSlider from "./components/ImageSlider";
import styled from "styled-components";
import BlogPost from "./components/BlogPost";
import AuthorInfo from "./components/AuthorInfo";
import FollowSocials from "./components/FollowSocials";
import RecentPosts from "./components/RecentPosts";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import FullBlogPost from "./components/FullPost";

function App() {

    const [title, setTitle] = useState("Default Title");

    useEffect(() => {
      // This will run when the page first loads and whenever the title changes
      document.title = title;
    }, [title]);
    
    const BlogPostSection = styled.div`
      display: flex;
    `;

    const Blog = styled.div`
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    const About = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: space-between;
      // background-color: red;
    `;

    const SearchBox = styled.div`
      display: flex;
      align-items: center;
      width: 70%;
      height: 50px;
      margin-top: 60px;
      // background-color: red;
    `;

    return (
      <>
        <Header />
        <BlogTitle />
        <ImageSlider />
        <BlogPostSection>
          <Blog>
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </Blog>
          <About>
            <AuthorInfo />
            <FollowSocials />
            <RecentPosts />
            <SearchBox>
              <Search />
            </SearchBox>
            <Categories />
          </About>
        </BlogPostSection>
        <Footer />
      </>
    );
}

export default App;
