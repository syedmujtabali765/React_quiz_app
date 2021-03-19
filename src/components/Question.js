import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      padding: '30px',
    },
  },
}));

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Please select one option!');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }else {
      onSetStep(3);
    }
  }

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Paper elevation={3}>
    <div>
      <div>
        <div>
          <i>Questions {activeQuestion + 1}/{numberOfQuestions}</i>
          <h2>{data.question}</h2>
          <div>
          <RadioGroup aria-label="gender" ref={radiosWrapper}>
          {data.choices.map((choice, i) => (
              <label key={i}>
                <FormControlLabel control={<Radio  color="primary" />} label={choice} type="radio" name="answer" value={choice} onChange={changeHandler} />
              </label>
            ))}
            </RadioGroup>
          </div>
          {error && <div className='redd'>{error}</div>}
          <Button variant="contained" color="primary" onClick={nextClickHandler}>Next</Button>
        </div>
      </div>
    </div>
    </Paper>
    </div>
  );
}

export default Question;