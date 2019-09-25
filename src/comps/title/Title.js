import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CenterText from '../center-text/CenterText';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: '#ececec'
  }
}));

export default function Title({ title }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <CenterText text={title} variant={'h6'} />
    </Paper>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired
};
