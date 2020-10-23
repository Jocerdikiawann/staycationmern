import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return (
    //   ref disini sebagai penunjuk ke mana animation scroll ini menuju
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {/* index menunjukan perdata dan array dimulai dari 0 */}
          {props.data.map((item, index) => {
            return (
              //   harus tambah spasi di bagian row-1/2 karena itu class
              //   jika tidak di tambah spasi classnya akan menjadi item column-4row1/2
              //   kalau pakai class menjadi item column-4 row-2 sesuai standard bootstrap
              <div
                key={`mostpicked-${index}`}
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
                <Fade bottom delay={300 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light">per {item.unit}</span>
                    </div>

                    <figure className="img-wrapper">
                      <img
                        className="img-cover"
                        src={item.imageUrl}
                        alt={item.name}
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="streched-link d-block text-white"
                        type="link"
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.name}</h5>
                      </Button>

                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
