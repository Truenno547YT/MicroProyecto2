import React from "react";
import "../assets/styles/menuSection.css";
import leafImage from "../assets/images/imgMenuSection/hoja.png";
import mololove from "../assets/images/imgMenuSection/Mololove.png";
import kilauea from "../assets/images/imgMenuSection/kilauea.png";
import salmonTherapy from "../assets/images/imgMenuSection/salmonTherapy.png";
import crazyOasis from "../assets/images/imgMenuSection/crazyOasis.png";

const MenuSection = () => {
  return (
    <div className="menuSection">
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <header className="he">
        <h1>BOWL Ó BURRITO</h1>
      </header>
      <br />
      <br />
      <div className="carousel">
        <button className="arrow left-arrow">{"<"}</button>

        <div className="cards-container">
          <div className="card f">
            <img src={mololove} alt="Mololove" />
            <h2>MOLOLOVE</h2>
            <p className="price">16$</p>
            <p className="ingredientes">
              BASE, ATÚN, SALMÓN, CAMARÓN, RÁBANO, ZANAHORIA, KALE, AGUACATE,
              SALSAS
            </p>
            <div className="more-icon">+</div>
          </div>
          <div className="card">
            <img src={kilauea} alt="Kilauea" />
            <h2>KILAUEA</h2>
            <p className="price">13$</p>
            <p className="ingredientes">
              BASE, ATÚN, SALMÓN, CAMARÓN, RÁBANO, ZANAHORIA, KALE, AGUACATE,
              SALSAS
            </p>
            <div className="more-icon">+</div>
          </div>
          <div className="card">
            <img src={salmonTherapy} alt="Salmon Therapy" />
            <h2>SALMON THERAPY</h2>
            <p className="price">16$</p>
            <p className="ingredientes">
              BASE, ATÚN, SALMÓN, CAMARÓN, RÁBANO, ZANAHORIA, KALE, AGUACATE,
              SALSAS
            </p>
            <div className="more-icon">+</div>
          </div>
          <div className="card">
            <img src={crazyOasis} alt="Crazy Oasis" />
            <h2>CRAZY OASIS</h2>
            <p className="price">16$</p>
            <p className="ingredientes">
              BASE, ATÚN, SALMÓN, CAMARÓN, RÁBANO, ZANAHORIA, KALE, AGUACATE,
              SALSAS
            </p>
            <div className="more-icon">+</div>
          </div>
        </div>

        <button className="arrow right-arrow">{">"}</button>
      </div>
      <button className="view-menu-btn">Ver Menú</button>

      <div className="leaf-container">
        <img src={leafImage} alt="Leaf" className="leaf" />
      </div>
    </div>
  );
};

export default MenuSection;
