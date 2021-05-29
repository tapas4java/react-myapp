import './App.css';
import 'date-fns';
import React from 'react';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';

function App() {

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  function handleRegister() {
    alert("Hello");
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            TEST REACT APP
          </Typography>
        </Toolbar>
      </AppBar>

      <form noValidate autoComplete="off" className="form-bg">
        <TextField
          label="Username"
          variant="filled"
          className="br-space"
        />
        <br />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          className="br-space"
        />
        <br />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date of Birth"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        <br />
        <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
      </form>

      
      
    </div>
  );
}

export default App;
