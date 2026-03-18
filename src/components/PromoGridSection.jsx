import React from 'react'
const promoData = [
  {
    id: 1,
    titleTop: "BEAUTIFUL",
    title: "Wedding Rings",
    img: "src/assets/img/promo1.jpg",
  },
  {
    id: 2,
    titleTop: "EARRING",
    title: "Tangerine Floral Earring",
    img: "src/assets/img/promo2.jpg",
  },
  {
    id: 3,
    titleTop: "NEW ARRIVALS",
    title: "Pearl Necklaces",
    img: "src/assets/img/promo3.jpg",
  },
  {
    id: 4,
    titleTop: "NEW DESIGN",
    title: "Diamond Jewelry",
    img: "src/assets/img/promo4.jpg",
  },
];
const PromoGridSection = () => {

  return (
      <section className="promo-grid py-5">
      <div className="container">
        <div className="row g-4">
            {promoData.map((item) => (
            <div className="col-md-6" key={item.id}>
              <div className="promo-card">
                <img src={item.img} alt={item.title} />

                <div className="promo-content">
                  <p className="small-title">{item.titleTop}</p>
                  <h3>{item.title}</h3>
                  <a href="#" className="shop-link">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default PromoGridSection
