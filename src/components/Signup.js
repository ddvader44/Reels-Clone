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
import {Link, useHistory} from  'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export default function Signup() {

const useStyles = makeStyles(
    {
        text1 : {
        color : 'grey' , 
        textAlign : 'center'
    },

    card2 : {
        height : '8vh',
        marginTop : '2%'
    }

}
)
const classes = useStyles();
const [email,setEmail] = React.useState('')
const [password,setPassword] = React.useState('')
const [name,setName] = React.useState('')
const [file,setFile] = React.useState(null)
const [error,setError] = React.useState('')
const [loading,setLoading] = React.useState('')
const history = useHistory()
const {signup} = React.useContext(AuthContext)


const handleClick = async() => {
  if(file==null) {
    setError("Please upload your Profile Image!")
    setTimeout( () => {
      setError('')
    },5000)
    return;
  }

  try {
    let userObj = await signup(email,password)
    let uid = userObj.user.uid
    console.log(uid)
  } catch(err) {
    setError(err)
    setTimeout( () => {
      setError('')
    },5000)
  }

}

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

          {error!='' && <Alert severity="error">{error}</Alert>}

          <TextField id="outlined-basic" label="Email" variant="outlined" 
          fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <TextField id="outlined-basic" label="Password" variant="outlined" 
          fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <TextField id="outlined-basic" label="Full Name" variant="outlined"
           fullWidth={true} margin="dense" size="small" value={name} onChange={(e)=>setName(e.target.value)} />
          <Button
           color = "secondary" fullWidth = {true} variant="outlined" margin = "dense" startIcon= {<CloudUploadIcon/>} component = "label">
            Upload Profile Image
            <input type = "file" accept = "image/*" hidden onChange={(e)=>setFile(e.target.files[0])}/>
            </Button>
        </CardContent>
        <CardActions>
            <Button color="primary" fullWidth={true} variant="contained" disable={loading} onClick={handleClick}>
                Sign Up
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
