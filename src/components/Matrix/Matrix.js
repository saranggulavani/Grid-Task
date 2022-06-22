import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [rowData, setRowData] = useState("");
  const [colData, setColData] = useState("");

  function onClickHandler() {
    const Row = document.getElementById("rowField").value;
    const Column = document.getElementById("colField").value;
    console.log(Row, Column);

    var table = document.createElement("table"),
      tr,
      td,
      row,
      cell;
    for (row = 0; row < Row; row++) {
      tr = document.createElement("tr");
      for (cell = 0; cell < Column; cell++) {
        td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = "";
        // td.innerHTML = row * Column + cell + 1;
      }
      table.appendChild(tr);
    }
    document.getElementById("table-container").appendChild(table);
  }

  function getRowData(data) {
    setRowData(data.target.value);
    console.log(rowData);
  }

  function getColData(data) {
    setColData(data.target.value);
    console.log(colData);
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-7 mx-auto mt-5 d-flex">
            <input
              type="number"
              className="form-control mx-2"
              id="rowField"
              onChange={getRowData}
              value={rowData}
              placeholder="Add Rows"
            />
            <input
              type="number"
              className="form-control mx-2"
              id="colField"
              onChange={getColData}
              value={colData}
              placeholder="Add Columns"
            />
            <button
              className="btn btn-dark px-3"
              onClick={onClickHandler}
              type="button"
            >
              Add
            </button>
          </div>
          <div className="mt-5 text-center"></div>
          <div></div>
        </div>
        <div className="mt-3">
          <table
            className="table table-bordered table-dark"
            id="table-container"
          ></table>
        </div>
      </div>
    </>
  );
};

export default Matrix;
