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

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
        <button aria-expanded="false" aria-controls="menu-list">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3
               32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 
               0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 
               416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 
                210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 
              41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 
              406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </span>
          Menu
        </button>

        <ul id="menu-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Premium</a>
          </li>
          <li>
            <a href="#">Sofas</a>
          </li>
          <li>
            <a href="#">Stühle</a>
          </li>
          <li>
            <a href="#">Tische</a>
          </li>
          <li>
            <a href="#">Möbel</a>
          </li>{" "}
          <li>
            <a href="#">Deko</a>
          </li>
        </ul>
      </div>

      {/* main */}
      <section class="features">
        <div class="feature">
          <span class="icon">🌮</span>
          <h3>Tacos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            assumenda.
          </p>
        </div>
        <div class="feature">
          <span class="icon">🍺</span>
          <h3>Beer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            assumenda.
          </p>
        </div>
        <div class="feature">
          <span class="icon">🍷</span>
          <h3>Wine</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            assumenda.
          </p>
        </div>
        <div class="feature">
          <span class="icon">🎵</span>
          <h3>Music</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            assumenda.
          </p>
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
        <h2>Instant Grams</h2>
        <p>Get a taste of what we have to offer</p>
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
