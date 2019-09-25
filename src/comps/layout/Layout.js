import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogPosts from '../blog-posts/BlogPosts';
import Header from '../header/Header';
import UserBlogPosts from '../user-blog-posts/UserBlogPosts';
import Progress from '../progress-bar/Progress';
import Alert from '../alert/Alert';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
          <Progress />
          <Alert />
        </Grid>

        <Grid item xs={6}>
          <BlogPosts />
        </Grid>

        <Grid item xs={6}>
          <UserBlogPosts />
        </Grid>
      </Grid>
    </div>
  );
}
