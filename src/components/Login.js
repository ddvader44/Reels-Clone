import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea , CardActions} from '@mui/material';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import { makeStyles } from '@mui/styles';
import './Login.css'
import bg from '../assets/insta.png'
import insta from '../assets/Instagram.JPG'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import {Link} from  'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import 'pure-react-carousel/dist/react-carousel.es.css';


export default function Login() {

const useStyles = makeStyles(
    {
        text1 : {
        color : 'grey' , 
        textAlign : 'center'
    },

    text2 : {
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
    <div className='loginWrapper'>

{/* https://www.npmjs.com/package/pure-react-carousel for image slider*/}

        <div className = 'imgcar' style = {{backgroundImage : 'url('+bg+')'}}>
            <div className='car'>
            <CarouselProvider
            visibleSlides={1}
        naturalSlideWidth={238}
        naturalSlideHeight={423}
        totalSlides={5}
        isPlaying = {true}
        infinite = {true}
        dragEnabled = {true}
        touchEnabled = {true}
      >
        <Slider>
          <Slide index={0}><Image src={img1}/></Slide>
          <Slide index={1}><Image src={img2}/></Slide>
          <Slide index={2}><Image src={img3}/></Slide>
          <Slide index={3}><Image src={img4}/></Slide>
          <Slide index={4}><Image src={img5}/></Slide>
        </Slider>
      </CarouselProvider>
            </div>
        </div>

        <div className='loginCard'>
        <Card variant = "outlined">
            <div className='insta-logo'>
                <img src = {insta} alt=""/>
            </div>
        <CardContent>
          {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"/>
          <CardContent>
        <Typography className= {classes.text2} color='primary' variant="subtitle1">
            Forgot Password?</Typography>
          </CardContent>
        </CardContent>
        <CardActions>
            <Button color="primary" fullWidth={true} variant="contained">
                Log in
            </Button>
        </CardActions>
    </Card>
    <Card variant="outlined" className = {classes.card2}>
        <CardContent>
        <Typography className= {classes.text1} variant="subtitle1">
            Don't have an account? <Link to = "/signup" className = 'linky' style = {{textDecoration : 'none'}}>Sign Up</Link></Typography>
          </CardContent>
    </Card>
        </div>
    </div>
    
  );
}
