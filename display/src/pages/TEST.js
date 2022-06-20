import React from "react";
import ReactDOM from "react-dom";


const RECORDS = {
  "Master Automotives": [
    {
      SparePartID: "43",
      Name: "Oil and Lubricants",
      Price: "4500",
      VendorID: "48",
      CompanyName: "Master Automotives",
      Qty: 1,
      TotalPrice: "4500"
    },
    {
      SparePartID: "45",
      Name: "Lights",
      Price: "2300",
      VendorID: "48",
      CompanyName: "Master Automotives",
      Qty: 1,
      TotalPrice: "2300"
    }
  ],
  "Repair Solutions": [
    {
      SparePartID: "47",
      Name: "Steering Wheel",
      Price: "1500",
      VendorID: "60",
      CompanyName: "Repair Solutions",
      Qty: 1,
      TotalPrice: "1500"
    }
  ],

  "FiveStar Automotives": [
    {
      SparePartID: "51",
      Name: "Brakes",
      Price: "234",
      VendorID: "70",
      CompanyName: "FiveStar Automotives",
      Qty: 1,
      TotalPrice: "234"
    },
    {
      SparePartID: "53",
      Name: "Clutch",
      Price: "999",
      VendorID: "70",
      CompanyName: "FiveStar Automotives",
      Qty: 1,
      TotalPrice: "999"
    },
    {
      SparePartID: "55",
      Name: "LED",
      Price: "288",
      VendorID: "70",
      CompanyName: "FiveStar Automotives",
      Qty: 1,
      TotalPrice: "288"
    }
  ]
};

export default class App extends React.Component {
  state = {
    records: RECORDS
  };

  onChangeQty = (companyName, sid, e) => {
    const { records } = this.state;

    const newQty = e.target.value;

    this.setState({
      records: {
        ...records,
        [companyName]: records[companyName].map(product =>
          product.SparePartID === sid
            ? {
                ...product,
                Qty: newQty,
                TotalPrice: newQty
              }
            : product
        )
      }
    });
  };

  render() {
    const { records } = this.state;

    return (
      <div className="App">
        {Object.keys(records).map((CompanyName, i) => (
          <div key={CompanyName}>
            <h2>Supplier: {CompanyName}</h2>
            {records[CompanyName].map((product, i) => (
              <tr>
                <td>
                  <h4> {product["SparePartID"]} </h4>
                </td>

                <td>
                  <h4>{product["Name"]} </h4>
                </td>

                <td>
                  <h4> {product["Price"]} </h4>
                </td>

                <td>
                  <input
                    type="number"
                    value={product["Qty"]}
                    min="1"
                    onChange={e =>
                      this.onChangeQty(CompanyName, product["SparePartID"], e)
                    }
                  />
                </td>

                <td> $ {product["TotalPrice"]}</td>
              </tr>
            ))}
          </div>
        ))}
      </div>
    );
  }
}