import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { formatTime } from './index';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: '3px',
      padding: '30px',
    },
  },
  btn: {
    marginRight: '7px',
  },
}));

const End = ({ results, data, onReset, backToHome, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div>
          <h3>Your results</h3>
          <p>{correctAnswers} of {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>Your time:</strong> {formatTime(time)}</p>
          <Button className={classes.btn} variant="contained" size="large" color="primary" onClick={backToHome}>Back to home</Button>
          <Button variant="contained" size="large" color="primary" onClick={onReset}>Try again</Button>
        </div>
      </Paper>
    </div>
  );
}

export default End;