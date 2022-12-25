import React from "react";
import "./style.css";

export const Search = (props) => (
  <div className="Search">
    Хайх:{" "}
    <input
      type="search"
      placeholder="хайх роботоо энд бич"
      onChange={props.onSearch}
    />
  </div>
);
