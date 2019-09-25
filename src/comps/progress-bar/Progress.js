import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

function Progress({ blog }) {
  const classes = useStyles();
  const { loading } = blog;

  if (!loading) {
    return null;
  }

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  null
)(Progress);
