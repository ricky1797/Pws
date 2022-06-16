import React from 'react'

import { Main,
  Logo,
  Topdiv,
  Centerdiv,
  Toph1tag,
  Slideshow,
  Slide,
  SlideshowDots,
  SlideshowDot,
  Container,
  Div1,
  Div2

} from '../styles/RiaTrackerElem'

import RiaLogo from '../images/ria.png'
import MexicoTable from '../components/MexicoTable'
import GuatemalaTable from '../components/GuatemalaTable'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const RiaTracker = () => {


  return (
    
    <Main>
       <Logo src={RiaLogo}/>
       <Container>
      <Topdiv>
        <Toph1tag>Precios de Hoy / Prices of Today</Toph1tag>
      </Topdiv>
      <Centerdiv>
      
    </Centerdiv>
    </Container>
    </Main>
  )
}

export default RiaTracker