import React from "react";
import Fade from "react-reveal/Fade";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {/* menerima item dan index  */}
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              // logicnya jika index lebih besar dari 0
              //maka tambahkan class nya column-5 kalo engga column-7
              //ribet ya cuma class aja di pakein logic
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              <Fade bottom delay={300 * index}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    {/* di ambil dari json */}
                    <img src={item.url} alt={item._id} className="img-cover" />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
