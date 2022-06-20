import React from 'react'
import ReactDOM from "react-dom";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


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
  Div2,
  Div3

} from '../styles/RiaTrackerElem'

import RiaLogo from '../images/ria.png'
import MexicoTable from '../components/MexicoTable'
import GuatemalaTable from '../components/GuatemalaTable'
import HondurasTable from '../components/HondurasTable'

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;


class RiaTracker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }
  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };

  render() {
  return (
    
    <Main>
       <Logo src={RiaLogo}/>
       <Container>
      <Topdiv>
        <Toph1tag>Tipo de Cambio / Currency Exchange</Toph1tag>
      </Topdiv>
      <Centerdiv>
      <ReactBootstrapCarousel animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={5000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={this.slider}
              version={4}>
                <Div1>
                <MexicoTable/>
                </Div1>
                <Div2>
                  <GuatemalaTable/>
                </Div2>
                <Div3>
                <HondurasTable/>
                </Div3>
      </ReactBootstrapCarousel>
    </Centerdiv>
    </Container>
    </Main>
  )
}
}

export default RiaTracker