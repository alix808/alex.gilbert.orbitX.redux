import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterPosts, regCheck, setLogo } from '../../redux/blog/blog.actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '2rem'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '400px'
  }
}));

function Search({ filterPosts, regCheck, blog, setLogo }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: ''
  });

  const { postData } = blog;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    filterPosts(postData, values.name);
    regCheck(values.name);
    setLogo();
  };

  return (
    <form
      onSubmit={onSubmit}
      className={classes.container}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-name'
        label='userId'
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin='normal'
        variant='outlined'
      />
    </form>
  );
}

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  { filterPosts, regCheck, setLogo }
)(Search);
