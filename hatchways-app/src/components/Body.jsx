import React, { useState, useEffect } from "react";
import axios from "axios";

const Body = () => {
  function getPing() {
    axios.get(`https://`).then(function (response) {
      console.log(response);
    });
  }
  return (
    <>
      <input id="tags" type="text" placeholder="Search for tags"></input>
      <input id="tags" type="text" placeholder="SortBy"></input>
      <input id="tags" type="text" placeholder="Direction"></input>
      <div className="mid-body">
        <h1></h1>
        <div className="Return-Box">
          This is going to be a box
          <div className="Titles">
            <div id="Route-1">Route 1 </div>
            <div id="Route-2">Route 2</div>
            <div id="Route-3">Route 3 </div>
          </div>
          <div className="Results-Box">
            <div id="Result-1">Result 1 </div>
            <div id="Result-2">Result 2 </div>
            <div id="Result-3">Result 3 </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
