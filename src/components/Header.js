import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import firebase from '../config/firebase'
import { Redirect } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const [logout, setLogout] = useState(false);
  const classes = useStyles();
  
  const handlelogout = () => {
    firebase.auth().signOut();
    setLogout(true);
  };

  return (
    <>
      {logout === true ?
        <Redirect to="/signup" />
        :
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Quiz Application
          </Typography>
              <Button color="inherit" onClick={handlelogout}>Logout</Button>
            </Toolbar>
          </AppBar>
        </div>
      }
    </>
  );
}
