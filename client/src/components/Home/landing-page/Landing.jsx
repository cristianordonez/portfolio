import React from 'react';
import './Landing.scss';
import { Button } from '@mui/material';
import Scroll from 'react-scroll';
const scroller = Scroll.scroller;
import Typography from '@mui/material/Typography';

const Landing = () => {
   const handleClick = () => {
      scroller.scrollTo('about');
   };

   return (
      <div className='landing' id='home'>
         <div className='background-shapes'></div>
         <div className='heading-container'>
            <Typography variant='h1'>Hi, I'm Cristian Ordoñez.</Typography>
         </div>
         <Typography className='landing-text' variant='body1'>
            I am a full-stack web developer .
         </Typography>
         {/* <p className='landing-text'>I am a full-stack web developer.</p> */}
         <Button
            onClick={() => handleClick()}
            color='secondary'
            variant='contained'
            aria-label='go to main page content'
            className='landing-page-link'
            sx={{
               fontWeight: 'bold',
               color: 'black',
            }}
         >
            View My Work
         </Button>
      </div>
   );
};

export default Landing;
