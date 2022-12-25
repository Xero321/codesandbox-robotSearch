import React from "react";
import { Card } from "../card";
import { Search } from "../search";

import "./card-list.styles.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.robots.map((el) => (
      <Card key={el.key} robot={el} />
    ))}
  </div>
);
