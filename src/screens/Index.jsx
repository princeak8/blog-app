import React from "react";
import Header from "../components/Header";
import BlogTitle from "../components/BlogTitle";
import ImageSlider from "../components/ImageSlider";
import styled from "styled-components";
import BlogPost from "../components/BlogPost";
import AuthorInfo from "../components/AuthorInfo";
import FollowSocials from "../components/FollowSocials";
import RecentPosts from "../components/RecentPosts";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
// import FullBlogPost from "./components/FullPost";
import { useEffect } from "react";
import post from "../api/post";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/postsSlice";

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
function Index(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsDisplay.allPosts);
  const { perPage, totalPosts } = useSelector(
    (state) => state.postsDisplay.displaySetting
  );

  const getAllPost = async () => {
    const response = await post.getAllPosts("blog");
    if (!response.ok) return console.log(response.date);

    dispatch(postActions.setDisplaySetting(response.data.meta));
    dispatch(postActions.initializePosts(response.data.data));
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <>
      <Header />
      <BlogTitle />
      <ImageSlider />
      <BlogPostSection>
        <Blog>
          {posts &&
            posts.map((post) => <BlogPost key={post.id} postItem={post} />)}
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

export default Index;
