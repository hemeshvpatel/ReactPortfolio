import React from "react";
import { workExperience } from "../data";

export default function WorkExperience() {
  //Some Ideas:
  //1) Turn this into a timeline with the ability to click and interact, ensure everything has links
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {(workExperience || []).map((item, key) => {
        const { company, location, position, startDate, endDate } = item;
        return (
          <div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={key}
          >
            <div style={{ fontWeight: 700 }}>{position}</div>
            <div>
              {company} | {location}
            </div>
            <div>
              {startDate} to {endDate}
            </div>
          </div>
        );
      })}
    </div>
  );
}
