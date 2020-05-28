import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ProfileList from './ProfileList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: '20px',
  },
}));

export default function Profile(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container>
            <Grid conatiner spacing xs={12} sm={12}>
                <ProfileList arr={props}/>
            </Grid>
        </Container>
    </div>
  );
}