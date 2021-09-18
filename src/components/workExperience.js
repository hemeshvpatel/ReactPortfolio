import React from "react";
import { workExperience } from "../data";
import TextLink from "./library/textLink";

export default function WorkExperience() {
  //Some Ideas:
  //1) Turn this into a timeline with the ability to click and interact, ensure everything has links
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {(workExperience || []).map((item, key) => {
        const {
          company,
          companyUrl,
          location,
          position,
          startDate,
          endDate,
          summary,
          bullets,
        } = item;
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
            <div
              style={{
                display: "flex",
              }}
            >
              <TextLink company={company} companyUrl={companyUrl} />
              {location}
            </div>
            <div>{companyUrl}</div>
            <div></div>
            <div>
              {startDate} to {endDate}
            </div>
            <div style={{ margin: "10px", fontStyle: "italic", width: "60%" }}>
              {summary}
            </div>
            <div style={{ width: "50%" }}>
              {(bullets || []).map((bullet, key) => {
                //console.log("each bullet: ", bullet)
                return (
                  <div key={key} style={{ margin: "5px" }}>
                    •{bullet}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
