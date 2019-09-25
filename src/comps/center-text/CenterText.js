import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  typography: {
    flex: 1,
    textAlign: 'center',
    color: '#747474'
  }
}));

export default function CenterText({ text, variant }) {
  const classes = useStyles();

  return (
    <FlexBox>
      <Typography className={classes.typography} variant={variant}>
        {text}
      </Typography>
    </FlexBox>
  );
}

const FlexBox = styled.div`
  display: flex;
`;

CenterText.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
};
