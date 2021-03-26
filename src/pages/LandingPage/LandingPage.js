import { useContext, useState } from 'react';

import { Paper, Grid, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../provider/ThemeContext';

import MyButton from '../../components/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  paper: {
    backgroundColor: theme.palette.backgroundReverse.light,
    width: 300,
    padding: 10,
  },
}));

const LandingPage = () => {
  const { handleTheme, darkMode } = useContext(ThemeContext);
  const [calcValue, setCalcValue] = useState('');

  const handleClear = () => {
    setCalcValue('');
  };

  const handlePrint = (id) => {
    const value = calcValue + id;
    setCalcValue(value);
  };

  const handleCalc = () => {
    const calc = eval(calcValue);
    setCalcValue(calc);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container alignItems="center" justify="center" spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" color="secondary">
              Calculadora
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField
              variant="standard"
              placeholder="Resutado"
              fullWidth
              className={classes.input}
              value={calcValue}
              disabled
            />
          </Grid>
          <MyButton
            value="="
            color="primary"
            fontWeight="bold"
            onClick={handleCalc}
          />
          <MyButton value="1" onClick={() => handlePrint('1')} />
          <MyButton value="2" onClick={() => handlePrint('2')} />
          <MyButton value="3" onClick={() => handlePrint('3')} />
          <MyButton value="+" onClick={() => handlePrint('+')} />
          <MyButton value="4" onClick={() => handlePrint('4')} />
          <MyButton value="5" onClick={() => handlePrint('5')} />
          <MyButton value="6" onClick={() => handlePrint('6')} />
          <MyButton value="-" onClick={() => handlePrint('-')} />
          <MyButton value="7" onClick={() => handlePrint('7')} />
          <MyButton value="8" onClick={() => handlePrint('8')} />
          <MyButton value="9" onClick={() => handlePrint('9')} />
          <MyButton value="x" onClick={() => handlePrint('*')} />
          <MyButton
            value="C"
            color="primary"
            fontWeight="bold"
            onClick={handleClear}
          />
          <MyButton value="0" onClick={() => handlePrint('0')} />
          <MyButton value="." onClick={() => handlePrint('.')} />
          <MyButton value="/" onClick={() => handlePrint('/')} />
          <Grid item xs={6}>
            <Button fullWidth>
              <Typography align="center">Código</Typography>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth onClick={handleTheme}>
              <Typography align="center">
                {darkMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LandingPage;
