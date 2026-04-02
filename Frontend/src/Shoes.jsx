import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Shoes.css";

// Images
import navImg from "./assets/nav.svg";
import shoes from "./assets/shoes.png";
import shoes3 from "./assets/shoes3.png";
import shoes4 from "./assets/shoes4.png";
import shoes5 from "./assets/shoes5.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import banner from "./assets/banner.svg";
import logo from "./assets/footer-logo.svg";

// Components
import Login from "./login.jsx";
import { CartContext } from "./CartContext.jsx";

function Shoes() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const popularProducts = [
    { img: shoes3, name: "Chuck Taylor All Star", price: "100.20 €", id: 1 },
    { img: shoes4, name: "Run Star Hike Sequins", price: "190.00 €", id: 2 },
    { img: shoes5, name: "Chuck 70 Y2K Heart", price: "130.00 €", id: 3 },
  ];
  

  const features = [
    { icon: icon1, title: "Free Shipping", text: "Complimentary shipping on all orders." },
    { icon: icon3, title: "Secure Payment", text: "All transactions are safe and secure." },
    { icon: icon2, title: "24/7 Support", text: "We are here to help anytime." },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={navImg} alt="Logo" style={{ height: "50px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
              <li className="nav-item">
                <button className="btn btn-outline-dark" onClick={() => navigate("/cart")}>
                  Cart ({cartItems.length})
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark" onClick={() => setShowLogin(true)}>Log in</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-dark">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container-fluid main py-5" style={{ paddingTop: "120px" }}>
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 style={{ fontWeight: "700" }}>Our Summer Collection</h1>
            <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>New Collection</h2>
            <h3>Converse</h3>
            <p style={{ maxWidth: "400px" }}>
              Discover stylish Converse arrivals, quality comfort, and innovation for your active life.
            </p>
            <button className="btn btn-dark px-4 py-2 mt-3">Shop Now</button>
          </div>
          <div className="col-md-6 text-center">
            <img src={shoes} alt="Main shoes" className="img-fluid" style={{ maxHeight: "450px" }} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-fluid text-center py-5 bg-light">
        <div className="row">
          <div className="col-md-4"><h2>1k+</h2><p>Brands</p></div>
          <div className="col-md-4"><h2>500+</h2><p>Shops</p></div>
          <div className="col-md-4"><h2>250k+</h2><p>Customers</p></div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Our Popular Products</h2>
        <div className="row">
          {popularProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div
                className="card h-100 text-center"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "360px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>{product.name}</h5>
                  <p>{product.price}</p>
                  <button
                    className="btn btn-dark"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-5 bg-light">
        <h2 className="text-center mb-5">Why Choose Us</h2>
        <div className="row text-center">
          {features.map((f, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <img src={f.icon} alt={f.title} style={{ height: "80px" }} />
              <h5 className="mt-3">{f.title}</h5>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer Section */}
      <section
        className="container-fluid py-5 text-center position-relative"
        style={{
          background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "-50px",
            width: "150px",
            height: "150px",
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
          <div className="col-md-6 text-center">
            <h2 style={{ fontWeight: "700", fontSize: "3rem", marginBottom: "20px" }}>
              Special Offer!
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "30px", maxWidth: "450px", marginLeft: "auto", marginRight: "auto" }}>
              Grab the hottest Converse styles at unbeatable prices. Limited time only!
            </p>
            <div>
              <button
                className="btn btn-dark me-3"
                style={{ padding: "12px 30px", fontSize: "1rem" }}
                onClick={() => navigate("/product/1")}
              >
                Shop Now
              </button>
              <button
                className="btn btn-outline-light"
                style={{ padding: "12px 30px", fontSize: "1rem", borderWidth: "2px" }}
                onClick={() => navigate("/product/2")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={banner}
              alt="Special Offer"
              className="img-fluid"
              style={{
                maxHeight: "400px",
                transform: "rotate(-5deg)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container py-5 text-center">
        <h3>Sign Up for Updates & Newsletter</h3>
        <div className="d-flex justify-content-center mt-3">
          <input type="email" className="form-control w-50 me-2" placeholder="Your email..." />
          <button className="btn btn-dark">Sign Up</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src={logo} alt="Logo" style={{ height: "50px" }} />
              <p className="mt-3">
                Get shoes ready for the new term at your nearest Converse store. Rewards and perfect sizes.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Products</h5>
              <p>Chuck Taylor All Star<br />Run Star Hike Platform<br />Chuck 70 Tri-Color</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Contact</h5>
              <p>customer@converse.com<br />+92554862354</p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Converse. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Shoes;
