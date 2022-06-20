import React from "react";
import ReactDOM from "react-dom";

import {MRiaData, GRiaData, HRiaData} from '../data/RiaData'

const fs = require('fs');
const path = require('path');


const RECORDS = {MRiaData}
export default class Settings extends React.Component{
  state = {
    records: RECORDS
  };

  onChangePrice = (cName, sid, e) =>{
    const {records} = this.state;
    const newPrice = e.target.value;

    this.setState({
      records:{
        ...records,
        [cName]: records[cName].map(product =>
          product.Id === sid
          ? {
            ...product,
            Price: newPrice
          }
          :product
        )
      }
    })
  }
  render() {
    const { records } = this.state;
  
    return (
      <div className="App">
        {Object.keys(records).map((Name, i) => (
          <div key={Name}>
{records[Name].map((product, i) =>(
  <tr>
  <td>
    <h4>{product["Name"]} </h4>
  </td>

  <td>
    <h4> ${product["Price"]} </h4>
  </td>
  <td>
                  <input
                    
                    value={product["Price"]}
                    min="1"
                    onChange={e =>
                      this.onChangePrice(Name, product["Id"], e)
                    }
                  />
                </td>

</tr>
  ))}
          </div>
            ))}
        </div>

    )
  }
}