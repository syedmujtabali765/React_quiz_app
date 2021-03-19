import './App.css';
import { Switch, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import QuizStarted from './components/QuizStarted';


function App() {
  return (
    <>
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/" component={QuizStarted} /> */}
      </Switch>
    </>
  );
}

export default App;
