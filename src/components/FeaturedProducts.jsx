import React from "react";

const FeaturedProducts = () => {
  const products = [
    { name: "Rings", image: "/images/bangles.png" },
    { name: "Necklace", image: "/images/neckless.png" },
    { name: "Bracelet", image: "/images/chains.png" },
    { name: "Chains", image: "/images/ring.png" },
  ];
  return (
    <section className="featured-products py-5">
      <div className="container text-center">
        {/* Section Title */}
        <h2 className="section-title mb-3">Featured Jewellery</h2>
        <p className="text-muted mb-5">
          Discover our beautifully crafted gold jewellery collection.
        </p>

        <div className="row justify-content-center">
          {products.map((product, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div className="featured-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid featured-img"
                />
                <h6 className="mt-3">{product.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button className="btn primary-button mx-auto"> All Products</button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
