import React, { useState } from "react";

const data = {
  Bracelets: [
    {
      id: 1,
      title: "Diamond Band Ring",
      price: "$100.00",
      img: "/images/ring-new.jpg",
      category: "Chatelaine, Necklaces",
    },
    {
      id: 2,
      title: "Diamond Band Ring",
      price: "$86.00",
      img: "/images/ring-new.jpg",
      category: "Brooches, Flatware",
    },
    {
      id: 3,
      title: "Dissent Collar Earring",
      price: "$95.00",
      img: "/images/ring-new.jpg",
      category: "Necklaces, Runners",
    },
    {
      id: 4,
      title: "Long Earrings Women",
      price: "$70.00",
      oldPrice: "$80.00",
      img: "/images/ring-new.jpg",
      category: "Necklaces, Tiara",
      sale: true,
    },
  ],
  Earrings: [
    {
      id: 5,
      title: "Gold Drop Earrings",
      price: "$120.00",
      img: "/images/ring-new.jpg",
      category: "Earrings",
    },
    {
      id: 6,
      title: "Stud Earrings",
      price: "$90.00",
      img: "/images/ring-new.jpg",
      category: "Earrings",
    },
  ],
  Necklaces: [
    {
      id: 7,
      title: "Pearl Necklace",
      price: "$150.00",
      img: "/images/ring-new.jpg",
      category: "Necklaces",
    },
    {
      id: 8,
      title: "Gold Chain",
      price: "$200.00",
      img: "/images/ring-new.jpg",
      category: "Necklaces",
    },
  ],
};

const tabs = ["Bracelets", "Earrings", "Necklaces"];

const NewArrivalsSection = () => {
  const [activeTab, setActiveTab] = useState("Bracelets");
  const [animate, setAnimate] = useState(false);

  const handleTabClick = (tab) => {
    setAnimate(true);
    setTimeout(() => {
      setActiveTab(tab);
      setAnimate(false);
    }, 200);
  };

  return (
    <section className="new-arrivals py-5">
      <div className="container text-center">
        <h2>New Arrivals</h2>
        <p className="sub-text">Add new arrivals to weekly lineup</p>

        {/* Tabs */}
        <div className="tabs d-flex justify-content-center gap-4 my-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="row g-4 product-grid fade-in">
          {data[activeTab].map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="product-card">
                {item.sale && <span className="badge-sale">Sale!</span>}
                <img src={item.img} alt={item.title} />
                <p className="category">{item.category}</p>
                <h6>{item.title}</h6>
                <div className="price">
                  {item.oldPrice && (
                    <span className="old">{item.oldPrice}</span>
                  )}
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NewArrivalsSection;
