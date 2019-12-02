import React, { Fragment, Component } from "react";

import "./main.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      status: {
        statusField1: false,
        statusField2: false,
        statusField3: false
      },

      data: {
        inputField1: null,
        inputField2: null,
        inputField3: null
      },

      result: 0
    };
  }

  operation = command => {
    let data = Object.values(this.state.data);
    let arr = [];
    for (let i = 0; i < data.length; ) {
      if (data[i] !== null) {
        arr.push(data[i]);
        i++;
      } else {
        i++;
      }
    }

    let result = null;

    if (arr.length === 1) {
      alert("Error");
    } else if (command === "plus") {
      for (let i = 0; i < arr.length; i++) {
        result += arr[i];
      }
    } else if (command === "minus") {
      for (let i = 0; i < arr.length; ) {
        if (result === null) {
          result = arr[i];
          i++;
        } else {
          result -= arr[i];
          i++;
        }
      }
    } else if (command === "multiply") {
      for (let i = 0; i < arr.length; ) {
        if (result === null) {
          result = arr[i];
          i++;
        } else {
          result *= arr[i];
          i++;
        }
      }
    } else if (command === "divided") {
      for (let i = 0; i < arr.length; ) {
        if (result === null) {
          result = arr[i];
          i++;
        } else {
          result /= arr[i];
          i++;
        }
      }
    }

    this.setState({
      result
    });
  };

  clear = () => {
    let resData = {
      inputField1: null,
      inputField2: null,
      inputField3: null
    };

    document.getElementById("inputField1").value = "";
    document.getElementById("inputField2").value = "";
    document.getElementById("inputField3").value = "";

    this.setState({
      data: resData,
      result: 0
    });
  };

  handleChange = e => {
    let data = { ...this.state.data };
    data[e.target.name] = Number(e.target.value);
    this.setState({
      data
    });
  };

  handleCheck = e => {
    let status = { ...this.state.status };
    status[e.target.name] = e.target.checked;
    this.setState({
      status
    });
  };

  render() {
    const status = this.state.status;
    const data = this.state.data;
    console.log(this.state.data);
    return (
      <Fragment>
        <div className="container-fluid home">
          <div className="Calculator col-lg-3 ml-auto mr-auto shadow-sm">
            <div className="input-form">
              <input
                type="number"
                className="form-control inputed"
                placeholder="Input Number"
                name="inputField1"
                id="inputField1"
                onChange={this.handleChange}
                disabled={status.statusField1 === false ? true : false}
                defaultValue={data.inputField1}
              />
              <div className="col-lg-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="statusField1"
                  onChange={this.handleCheck}
                />
              </div>
            </div>
            <div className="input-form">
              <input
                type="number"
                className="form-control"
                placeholder="Input Number"
                name="inputField2"
                id="inputField2"
                onChange={this.handleChange}
                disabled={status.statusField2 === false ? true : false}
                defaultValue={data.inputField2}
              />
              <div className="col-lg-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="statusField2"
                  onChange={this.handleCheck}
                />
              </div>
            </div>
            <div className="input-form">
              <input
                type="number"
                className="form-control"
                placeholder="Input Number"
                name="inputField3"
                id="inputField3"
                onChange={this.handleChange}
                disabled={status.statusField3 === false ? true : false}
                defaultValue={data.inputField3}
              />
              <div className="col-lg-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="statusField3"
                  onChange={this.handleCheck}
                />
              </div>
            </div>
            <div className="button-group">
              <button
                className="btn btn-info tombol"
                onClick={() => this.operation("plus")}
              >
                +
              </button>
              <button
                className="btn btn-info tombol"
                onClick={() => this.operation("minus")}
              >
                -
              </button>
              <button
                className="btn btn-info tombol"
                onClick={() => this.operation("multiply")}
              >
                x
              </button>
              <button
                className="btn btn-info tombol"
                onClick={() => this.operation("divided")}
              >
                /
              </button>
              <button className="btn btn-danger tombol" onClick={this.clear}>
                C
              </button>
            </div>
            <div className="Output col-lg-12">
              <h5>Hasil :</h5>
              <div className="outNumb">{this.state.result}</div>
            </div>
          </div>
          <div
            className="mt-3 ml-auto mr-auto col-lg-3"
            style={{ color: "grey", fontWeight: "500" }}
          >
            by Mohammad Fachmi Firmansyah
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;
