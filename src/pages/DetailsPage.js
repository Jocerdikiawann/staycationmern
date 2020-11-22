import React, { Component } from "react";
import PageDetailsTitle from "parts/PageDetailsTitle";
import Header from "parts/Header";
import itemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import Descrip from "parts/PagesDetailDescription";
import OpenBo from "parts/BookingForm";
import Categories from "parts/Categories";
import Footer from "parts/Footer";
import Testi from "parts/Testimony";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Details";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailsTitle
          breadcrumb={breadcrumb}
          data={itemDetails}
        ></PageDetailsTitle>
        <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Descrip data={itemDetails}></Descrip>
            </div>
            <div className="col-5">
              <OpenBo itemDetails={itemDetails}></OpenBo>
            </div>
          </div>
        </section>
        <Categories data={itemDetails.categories}></Categories>
        <Testi data={itemDetails.testimonial}></Testi>
        <Footer />
      </>
    );
  }
}
