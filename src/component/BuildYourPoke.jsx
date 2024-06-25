import React from "react";
import "../assets/styles/buildYourPoke.css";
import hojaImage from "../assets/images/imgBuildYourPoke/hoja2.png";
import flechaDerecha from "../assets/images/imgBuildYourPoke/FlechaDerecha.png";
import base from "../assets/images/imgBuildYourPoke/base.png";
import proteinas from "../assets/images/imgBuildYourPoke/proteínas.png";
import mixIns from "../assets/images/imgBuildYourPoke/mix-ins.png";
import salsas from "../assets/images/imgBuildYourPoke/salsas.png";
import toppings from "../assets/images/imgBuildYourPoke/toppings.png";
import crunchies from "../assets/images/imgBuildYourPoke/crunchies.png";

const BuildYourPoke = () => {
  return (
    <div className="container">
      <div className="espacio"></div>
      <div className="section left">
        <img src={base} alt="Step 1 Base" className="step" />
        <img src={proteinas} alt="Step 2 Proteínas" className="step" />
      </div>

      <div className="search-poke-container">
        <div className="search-poke">
          <a href="#" className="cta">
            Arma tu poke
          </a>
          <button type="submit" className="arrow-btn">
            <img src={flechaDerecha} alt="Flecha Derecha" />
          </button>
        </div>
      </div>

      <div className="section right">
        <img src={mixIns} alt="Step 3 Mix-ins" className="step" />
        <img src={salsas} alt="Step 4 Salsas" className="step" />
        <img src={toppings} alt="Step 5 Toppings" className="step" />
        <img src={crunchies} alt="Step 6 Crunchies" className="step" />
      </div>
      <div className="leaf-C">
        <img src={hojaImage} alt="Leaf" className="leafc" />
      </div>
    </div>
  );
};

export default BuildYourPoke;
