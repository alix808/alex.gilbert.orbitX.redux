import React from 'react';
import { connect } from 'react-redux';
import PostItem from '../post-item/PostItem';
import Title from '../title/Title';
import styled from 'styled-components';

const UserBlogPosts = ({ blog }) => {
  const { filteredData } = blog;

  return (
    <Wrapper>
      <Title title={'My posts'}></Title>
      {filteredData.map(({ id, title, body }) => (
        <PostItem key={id} title={title} body={body} id={id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-left: 2em;
  padding-right: 4em;
  @media (max-width: 600px) {
    padding: 0em;
  }
`;

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  null
)(UserBlogPosts);
