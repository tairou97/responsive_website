import { useState } from "react";
import mod1 from "./assets/mod1.png";
import mod2 from "./assets/mod2.png";
import mod3 from "./assets/mod3.png";
import mod4 from "./assets/mod4.png";
import mod5 from "./assets/mod5.png";
import mod6 from "./assets/mod6.png";
import mod7 from "./assets/mod7.png";
import mod8 from "./assets/mod8.png";
import mod9 from "./assets/mod9.png";
import mod10 from "./assets/mod10.png";
import modmitt from "./assets/modmitt.png";
import { FaBars, FaTimes } from "react-icons/fa";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrapper">
      {/* top */}
      <div className="top">
        <header className="hero">
          <h1>Unique By Tairou</h1>
          <p>The Unique Quality of scandinavian </p>
        </header>
        <div className="cta cta1">
          <p className="price"> €99</p>
          <p>Wandregale</p>
        </div>
        <div className="cta cta2">
          <p className="price">€659.99</p>
          <p>Sideboard</p>
        </div>
      </div>
      {/* menu */}

      <div className="menu">
        {/* Button to open/close the menu */}
        <button
          aria-expanded={isOpen} // Dynamically update ARIA attribute
          aria-controls="menu-list"
          onClick={toggleMenu} // Toggle the menu on button click
          className="menu-button"
        >
          <span>
            {isOpen ? <FaTimes /> : <FaBars />}{" "}
            {/* Display either bars or times icon */}
          </span>
        </button>

        {/* Menu items */}
        <ul
          id="menu-list"
          className={isOpen ? "menu-open" : "menu-closed"} // Apply open/closed class
        >
          <li>
            <a to="/home">Home</a>
          </li>
          <li>
            <a href="/premium">Premium</a>
          </li>
          <li>
            <a href="#Sofas">Sofas</a>
          </li>
          <li>
            <a href="#Stühle">Stühle</a>
          </li>
          <li>
            <a href="#Tische">Tische</a>
          </li>
          <li>
            <a href="#Möbel">Möbel</a>
          </li>
          <li>
            <a href="#Deko">Deko</a>
          </li>
        </ul>
      </div>

      {/* main */}
      <section class="features">
        <div class="feature feature1">
          <h3>Unique Museum</h3>
        </div>
        <div class="feature feature2">
          <h3>Find Peace in Quality</h3>
        </div>
        <div class="feature feature3">
          <h3>Timeless tones</h3>
        </div>
        <div class="feature feature4">
          <h3>What makes Life Better</h3>
        </div>
      </section>

      <section class="about">
        <div class="about__details">
          <h2>Featured Taco</h2>
          <p>Slim Profile, easy to hold and loaded with cheese.</p>
          <p>This is the one you have been waiting for</p>
          <button>Learn More →</button>
        </div>
      </section>

      <section class="gallery">
        <h2>Inspiration</h2>
        <img src={mod1} alt="" />
        <img src={mod2} alt="" />
        <img src={mod3} alt="" />
        <img src={mod4} alt="" />
        <img src={mod5} alt="" />
        <img src={mod6} alt="" />
        <img src={mod7} alt="" />
        <img src={mod8} alt="" />
        <img src={mod9} alt="" />
        <img src={mod10} alt="" />
      </section>
    </div>
  );
}

export default App;
