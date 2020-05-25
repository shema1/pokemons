import React from "react";
import "./stats.scss";
const Stats = ({ stats }) => {
  return (
    <ul className="stats">
      {stats &&
        stats.map((elem) => (
          <li className="stats-elem">
            <span className="stats-elem__name">{elem.stat.name}</span>{" "}
            <span className="stats-elem__value">{elem.base_stat}</span>
          </li>
        ))}
    </ul>
  );
};

export default Stats;
