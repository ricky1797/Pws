import styled from 'styled-components';

export const Main = styled.div`
height : 97vh;

`
export const Logo = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: 15%;
`
export const Tiendas = styled.img`
  width: 25%;
  height: 20%;
`
export const Container = styled.div`
display: grid;
`
export const Topdiv = styled.div`

`
export const Centerdiv = styled.div`

`

export const Toph1tag = styled.h1`
font-weight: bold;
font-size: 1.5em;
text-align:center;
color:red;
animation: blinker 2s linear infinite;
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
`
export const Table = styled.table`
display: table;
table-layout: fixed;
padding: 0 0 8em 0;
overflow: hidden;
width: 80%;
margin: 0 auto;
`
export const Thead = styled.thead`
color: black;
`
export const Tr = styled.tr`
&:nth-child(odd) {
	  background-color: #ff6100;
}
:nth-child(even) {
	  background-color: #fff;
}
/*&:hover {
  background-color: #464A52;
-webkit-box-shadow: 0 6px 6px -6px #0c0f14;
    -moz-box-shadow: 0 6px 6px -6px #0c0f14;
         box-shadow: 0 6px 6px -6px #0c0f14;
}*/
`

export const Th = styled.th`
text-align: left;
  background-color: #fff;
  &:first-child { color: #ED1C24; }
`

export const Td = styled.td`
text-align: left;
`

export const Tbody = styled.tbody`

`

export const Slideshow = styled.div`
margin: 0 auto;
overflow: hidden;
  max-width: 500px;

`
export const SlideshowSlider = styled.div`
white-space: nowrap;
transition: ease 1000ms;
`
export const Slide = styled.div`
display: inline-block;

height: 400px;
width: 100%;
border-radius: 40px;
`
export const SlideshowDots = styled.div`
text-align: center;
`

export const Tablemaindiv = styled.div`

`
export const SlideshowDot = styled.div`
 display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: #c4c4c4;
  &.active {
    color: #6a0dad;
  }
`

export const Div1 = styled.div`
`
export const Div2 = styled.div`
`