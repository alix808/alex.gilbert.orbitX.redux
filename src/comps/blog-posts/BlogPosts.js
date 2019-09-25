import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts, setLogo } from '../../redux/blog/blog.actions';
import PostItem from '../post-item/PostItem';
import Title from '../title/Title';
import styled from 'styled-components';

const BlogPosts = ({ blog, getPosts, setLogo }) => {
  const { postData } = blog;

  useEffect(() => {
    getPosts();
    setLogo();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Title title={'All posts'}></Title>
      {postData.map(({ id, title, body }) => (
        <PostItem key={id} title={title} body={body} id={id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-left: 4em;
  padding-right: 2em;
  @media (max-width: 600px) {
    padding: 0em;
  }
`;

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  { getPosts, setLogo }
)(BlogPosts);
