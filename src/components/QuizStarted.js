import React, { useState, useEffect } from 'react';
import Start from './Start';
import Question from './Question';
import End from './End';
import firebase from '../config/firebase'
import Loader from './Loader'
import Header from './Header'

let interval;

const QuizStarted = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);
  const [quizData, setQuizData] = useState({})

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStart = (e) => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    firebase.database().ref(`/${e}`).on('value', (data) => {
      let obj = data.val();
      setQuizData(obj)
    })
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <>
      <Header />
      <div className="let">
        <div className="App">
          {step === 1 ? <Start onQuizStart={quizStart} /> : <div>
            {!quizData.data ? <Loader /> : <div>
              {step === 2 && <Question
                data={quizData.data[activeQuestion]}
                onAnswerUpdate={setAnswers}
                numberOfQuestions={quizData.data.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
              />}

              {step === 20 && <Question
                data={quizData.data[activeQuestion]}
                onAnswerUpdate={setAnswers}
                numberOfQuestions={quizData.data.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
              />}

              {step === 40 && <Question
                data={quizData.data[activeQuestion]}
                onAnswerUpdate={setAnswers}
                numberOfQuestions={quizData.data.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
              />}

              {step === 3 && <End
                results={answers}
                data={quizData.data}
                onReset={resetClickHandler}
                backToHome={() => {
                  setStep(1);
                  setAnswers([]);
                  setActiveQuestion(0);
                  setTime(0)
                }}
                time={time}
              />}

            </div>
            }
          </div>}
        </div>
      </div>
    </>
  );
}

export default QuizStarted;
