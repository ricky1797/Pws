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
    Container,
    Tablemaindiv
  
  } from '../styles/RiaTrackerElem'
  import {MRiaData, GRiaData, ESRiaData} from '../data/RiaData'

import React from 'react'

const MexicoTable = () => {
  return (
    <Tablemaindiv>
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
    <Td><Tiendas src={data.Logo}/></Td>
<Td>{data.Name}</Td>
<Td>${data.Price}</Td>
</Tr>
))}

    </Tbody>
    </Table>
    </Tablemaindiv>
  )
}

export default MexicoTable