import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

function Alert({ blog }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { reg } = blog;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={reg}
      autoHideDuration={6000}
      onClose={() => dispatch({ type: 'REG_FALSE' })}
      ContentProps={{
        'aria-describedby': 'message-id'
      }}
      message={
        <span id='message-id'>
          Please enter a numerical value between 1 and 10
        </span>
      }
      action={[
        <IconButton
          key='close'
          aria-label='close'
          color='inherit'
          className={classes.close}
          onClick={() => dispatch({ type: 'REG_FALSE' })}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
}

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  null
)(Alert);
