import React from "react";
import Reacthtmlparser from "react-html-parser";
import F from "react-reveal/Fade";

export default function PagesDetailDescription({ data }) {
  return (
    <F>
      <main>
        <h4>About the place</h4>
        {Reacthtmlparser(data.description)}
        <div className="row" style={{ marginBottom: 30 }}>
          {/* data mengambil features yang berada di json lalu di maping */}
          {data.features.map((feature, index) => {
            return (
              <div
                key={`feature-${index}`}
                className="col-3"
                style={{ marginBottom: 20 }}
              >
                <img
                  src={feature.imageUrl}
                  alt={feature.name}
                  className="d-block mb-2"
                />
                <span>{feature.qty}</span>{" "}
                <span className="text-gray-500 font-weight-light">
                  {feature.name}
                </span>
              </div>
            );
          })}
        </div>
      </main>
    </F>
  );
}
