import React from "react";

const HeroSlider = () => {
  return (
    <div>
      <div className="hero-slider position-relative">
        <div
          id="goldCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/Capture11.PNG"
                className="d-block w-100 hero-img"
                alt="banner1"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/images/Capture22.PNG"
                className="d-block w-100 hero-img"
                alt="banner2"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/images/Capture33.PNG"
                className="d-block w-100 hero-img"
                alt="banner3"
              />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="banner-search container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-10">
              <div className="input-group shadow">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search jewellery..."
                />
                <button className="btn btn-warning">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
