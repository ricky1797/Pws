import { Main,
    Logo,
    Topdiv,
    Centerdiv,
    Toph1tag,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tiendas,
    Tbody,
    Slideshow,
    SlideshowSlider,
    Slide,
    SlideshowDots,
    SlideshowDot,
    Container
  
  } from '../styles/RiaTrackerElem'
  import {MRiaData, GRiaData, ESRiaData} from '../data/RiaData'

import React from 'react'

const MexicoTable = () => {
  return (
    <Table>
    <Thead>
        <Tr>
        <Th>MEXICO</Th>
            <Th>Surcusal/Store</Th>
            <Th>Precio/Price</Th>
        </Tr>
    </Thead>
    <Tbody>
    {MRiaData.map((data =>
  <Tr>
    <Td><Tiendas src={data.logo}/></Td>
<Td>{data.name}</Td>
<Td>{data.price}</Td>
</Tr>
))}

    </Tbody>
    </Table>
  )
}

export default MexicoTable