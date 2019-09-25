import React from 'react';
import { connect } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import logo from '../../img/logo.png';

function Logo({ blog }) {
  const { logoState } = blog;

  const { x } = useSpring({
    from: { x: 0 },
    x: logoState ? 1 : 0,
    config: { duration: 1500 }
  });
  return (
    <animated.div
      style={{
        transform: x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
          })
          .interpolate(x => `scale(${x})`)
      }}
    >
      <Flexbox>
        <Img src={logo} alt='Logo'></Img>
      </Flexbox>
    </animated.div>
  );
}

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 125px;
  padding: 2em;
`;

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  null
)(Logo);
