import React from 'react'

import { Main,
  Logo,
  Topdiv,
  Centerdiv,
  Toph1tag,
  Slideshow,
  SlideshowSlider,
  Slide,
  SlideshowDots,
  SlideshowDot,
  Container

} from '../styles/RiaTrackerElem'

import RiaLogo from '../images/ria.png'
import MexicoTable from '../components/MexicoTable'

const RiaTracker = () => {


  return (
    
    <Main>
       <Logo src={RiaLogo}/>
       <Container>
      <Topdiv>
        <Toph1tag>Precios de Hoy / Prices of Today</Toph1tag>
      </Topdiv>
      <Centerdiv>
          <MexicoTable/>
    </Centerdiv>
    </Container>
    </Main>
  )
}

export default RiaTracker