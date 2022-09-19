import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea , CardActions} from '@mui/material';
import { makeStyles } from '@mui/styles';
import './Signup.css'
import insta from '../assets/Instagram.JPG'
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import {Link} from  'react-router-dom';


export default function Signup() {

const useStyles = makeStyles(
    {
        text1 : {
        color : 'grey' , 
        textAlign : 'center'
    },

    card2 : {
        height : '5vh',
        marginTop : '2%'
    }

}
)
const classes = useStyles();

  return (
    <div className='signUpWrapper'>
        <div className='signupCard'>
        <Card variant = "outlined">
            <div className='insta-logo'>
                <img src = {insta} alt=""/>
            </div>
        <CardContent>
          <Typography className= {classes.text1} gutterBottom variant="subtitle1" component="div">
            Sign Up to see photos and videos from your friends
          </Typography>
          {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"/>
          <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small"/>
          <Button
           color = "secondary" fullWidth = {true} variant="outlined" margin = "dense" startIcon= {<CloudUploadIcon/>} component = "label">
            Upload Profile Image
            <input type = "file" accept = "image/*" hidden/>
            </Button>
        </CardContent>
        <CardActions>
            <Button color="primary" fullWidth={true} variant="contained">
                Share
            </Button>
        </CardActions>
        <CardContent>
          <Typography className= {classes.text1} variant="subtitle1">
            By signing up, you agree to our Terms, Conditions and Cookie Policy.          </Typography>
          </CardContent>
    </Card>
    <Card variant="outlined" className = {classes.card2}>
        <CardContent>
        <Typography className= {classes.text1} variant="subtitle1">
            Having an account? <Link className = 'linky' to = "/login" style = {{textDecoration : 'none'}}>Login</Link></Typography>
          </CardContent>
    </Card>
        </div>
    </div>
    
  );
}