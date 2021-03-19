import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    '& > *': {
      margin: theme.spacing(1),
      padding: '30px',
    },
  }
}));

const Start = ({ onQuizStart }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div>
              <h1>Start the quiz</h1>
              <p>Good luck!</p>
              <Button className={classes.btn} variant="contained" size="large" color="primary" onClick={(a = "html") => onQuizStart('html')} >
                HTML Quiz
                </Button>
              <Button className={classes.btn} variant="contained" size="large" color="primary" onClick={(a = "css") => onQuizStart("css")}>
                CSS Quiz
                </Button>
              <Button className={classes.btn} variant="contained" size="large" color="primary" onClick={(a = "javascript") => onQuizStart("javascript")}>
                JAVASCRIPT Quiz
                </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Start;



