import { useState } from "react";
import Cards from "../Cards/Cards";
import "./NavBar.css";

// import icons
import uxIcon from "../../images/ux-icon.png";
import developmentIcon from "../../images/development-icon.png";
import brandingIcon from "../../images/branding-icon.png";
import searchOpIcon from "../../images/search-op-icon.png";

function MobileMenu() {
  return (
    <div>
      <ul>
        <li className="green">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

function NavBar() {
  // const menuBtn = document.querySelector(".hamburger-menu");
  // menuBtn.addEventListener("click", () => {
  //     if (menuBtn.classList.contains("open")){
  //         menuBtn.classList.add("open")
  //     } else {
  //         menuBtn.classList.remove("open")
  //     }
  // })

  const [classList, setClassList] = useState("hamburger-menu hide-on-desktop");

  const clickHandler = () => {
    if (classList == "hamburger-menu hide-on-desktop") {
      setClassList("hamburger-menu hide-on-desktop open");
    } else {
      setClassList("hamburger-menu hide-on-desktop");
    }
  };
  return (
    <>
      <div className="navBar">
        <div className="header flex hide-on-tablet">
          <span className="headerText">
            Phone no: <b>+00 1234 567</b> or email us:{" "}
            <b>emailsample@email.com</b>
          </span>
          <div className="navBarIconsContainer">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-dribbble"></i>
          </div>
        </div>
        <header className="nav">
          <nav>
            <a href="/" class="logoTitle hide-on-desktop">
              Portech
            </a>
            {/* <a href="#" class="hamburger-menu hide-for-desktop"> */}
            <a href="#" onClick={() => clickHandler()} class={classList}>
              <span></span>
              <span></span>
              <span></span>
            </a>
            <ul className="flex nav-ul hide-on-tablet">
              <li className="logoTitle">
                <a href="#">Portech</a>
              </li>
              <li className="green">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main flex ai-c">
          <div className="mainLeft flex ai-c">
            {/* <i class="fas fa-play-circle"></i> */}
            <i class="fas fa-play-circle"></i>
          </div>
          <div className="mainRight">
            <h6 className="mainRightTitle">Welcome to protech</h6>
            <h1 className="mainRightDo">
              WE CREATE WEBSITE THE WAY YOU WANT WITH PROTECH
            </h1>
            <h6 className="mainRightDetail">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </h6>
            <div className="buttonsContainer mt-3">
              <button className="learnMoreBtn">Learn More</button>
              <button className="viewBtn">View Portfolio</button>
            </div>
          </div>
        </main>
      </div>
      <div className="cards-container">
        {/* <div className="container p-a b-0"> */}
        <div className="container">
          <div className="row d-flex jc-sb ai-c">
            <Cards
              icon={uxIcon}
              title="UI/UX Design"
              para="A small river named Duden flows by their place and supplies 
                        it with the necessary regelialia. It is a paradisematic country, 
                        in which roasted parts of sentences fly into your mouth."
            />
            <Cards
              icon={developmentIcon}
              title="Development"
              para="A small river named Duden flows by their place and supplies 
                        it with the necessary regelialia. It is a paradisematic country, 
                        in which roasted parts of sentences fly into your mouth."
            />
            <Cards
              icon={brandingIcon}
              title="Branding"
              para="A small river named Duden flows by their place and supplies 
                        it with the necessary regelialia. It is a paradisematic country, 
                        in which roasted parts of sentences fly into your mouth."
            />
            <Cards
              icon={searchOpIcon}
              title="Search Optimization"
              para="A small river named Duden flows by their place and supplies 
                        it with the necessary regelialia. It is a paradisematic country, 
                        in which roasted parts of sentences fly into your mouth."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
