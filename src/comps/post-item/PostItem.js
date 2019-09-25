import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: '0.5rem'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#7a7a7a'
  },
  expansion: {
    backgroundColor: '#f8f8f8'
  },
  typography: {
    color: '#7a7a7a',
    paddingTop: '1rem'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

export default function PostItem({ title, body, id }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansion}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography className={classes.typography}>{body}</Typography>
          <Typography className={classes.typography}>
            Reference number:&nbsp;{id}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
