import React from 'react';
import CenterText from '../center-text/CenterText';
import Logo from '../logo/Logo';
import Search from '../search/Search';
import styled from 'styled-components';

export default function Header() {
  return (
    <BackGround>
      <CenterText text={'Posts Page'} variant={'h4'} />
      <Search />
      <Logo />
    </BackGround>
  );
}

const BackGround = styled.div`
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
  padding: 6rem;
`;
