import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  wrap: {
    width: '100%',
    padding: theme.spacing(1, 0.5, 1, 2)
  },
  buttonContainer: {
    textAlign: 'right'
  }
}));

const ContactListItem = ({ name, number, onDelete }) => {
  const classes = useStyles();

  return (
    <ListItem disableGutters>
      <Paper className={classes.wrap}>
        <Grid container alignItems="center" spacing={0}>
          <Grid item xs={6}>
            <ListItemText>{name}:</ListItemText>
          </Grid>
          <Grid item xs={4}>
            <ListItemText>{number}</ListItemText>
          </Grid>
          <Grid item xs={2} className={classes.buttonContainer}>
            <IconButton aria-label="delete" color="secondary" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  )
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default ContactListItem;