import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  Typography 
} from '@material-ui/core';
import { makeStyles,createStyles,styled } from "@material-ui/core/styles";
const useStyles = makeStyles(() =>
    createStyles({
        gridHeight:{
          height:'100vh'
        },
        logoText:{
          marginLeft:'40vw'
        }
}));

function App() {
  const classes=useStyles()
  return (
    <Paper>
        <Grid 
        container
        spacing={3}
        direction={'row'}
        justify={'center'}
        alignItems={'center'}
        className={classes.gridHeight}
        >
          <Grid item xs={12} md={6}>
          <Typography variant="h6" component="h6" className={classes.logoText}>
           contents
        </Typography>
            </Grid>
          <Grid item xs={12} md={6}>
          <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> Login </Button>
          </Grid>
        </Grid>
        </Grid>
        </Grid>
      </Paper>
  );
}

export default App;
