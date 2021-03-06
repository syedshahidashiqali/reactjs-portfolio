import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import "./NavBar.css";

// import icons
import uxIcon from "../../images/ux-icon.png";
import developmentIcon from "../../images/development-icon.png";
import brandingIcon from "../../images/branding-icon.png";
import searchOpIcon from "../../images/search-op-icon.png";

function MobileMenu() {
  return (
    <div className="mobile-menu hide-on-desktop">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Portfolio</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
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

  useEffect(() => {
    const getSize = () => {
      window.addEventListener("resize", () => {
        var width = window.innerWidth;
        if(width >= 994){
          setClassList("hamburger-menu hide-on-desktop");
        }
        console.log(`Window width is: ${width}px`)
      })
    };
    getSize()
  },[])
  return (
    <>
      <div className="navBar">
        <div className="header flex hide-on-tablet">
          <span className="headerText" style={{color: "rgba(255,255,255,0.6)"}}>
            Phone no: <b style={{color:"#fff"}}>+00 1234 567</b> or email us:{" "}
            <b style={{color:"#fff"}}>emailsample@email.com</b>
          </span>
          <div className="navBarIconsContainer">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-dribbble"></i>
          </div>
        </div>
        <header className="nav">
          <nav>
            <a href="/" className="logoTitle hide-on-desktop">
              Portech
            </a>
            {/* <a href="#" className="hamburger-menu hide-for-desktop"> */}
            <a href="#" onClick={clickHandler} className={classList}>
              <span></span>
              <span></span>
              <span></span>
            </a>
            {classList == "hamburger-menu hide-on-desktop open" ? (
          <MobileMenu />
        ) : (
          ""
        )}
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
              <li style={{flex:1.5}}>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main flex ai-c">
          <div className="mainLeft flex ai-c">
            {/* <i className="fas fa-play-circle"></i> */}
            <i className="fas fa-play-circle"></i>
          </div>
          <div className="mainRight d-flex fd-column animate__animated animate__fadeInUp">
            <h6 className="mainRightTitle">Welcome to protech</h6>
            <h2 className="mainRightDo">
              WE CREATE WEBSITE THE WAY YOU WANT WITH PROTECH
            </h2>
            <h6 className="mainRightDetail">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </h6>
            <div className="buttonsContainer mt-3">
              <button className="learnMoreBtn animate__animated animate__rollIn">Learn More</button>
              <button className="viewBtn animate__animated animate__rollIn">View Portfolio</button>
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
              // delayclass="animate__delay-1s"
              defaultClass='cards col-md-3 col-sm-12 col-xs-12 hidden'
              para="A small river named Duden flows by their place and supplies 
                        it with the necessary regelialia. It is a paradisematic country, 
                        in which roasted parts of sentences fly into your mouth."
            />
            <Cards
              icon={developmentIcon}
              // delayclass="animate__delay-1s"
              title="Development"
              defaultClass='cards col-md-3 col-sm-12 col-xs-12 hidden'
              para="A small river named Duden flows by their place and supplies 
                        it with the necessary regelialia. It is a paradisematic country, 
                        in which roasted parts of sentences fly into your mouth."
            />
            <Cards
              icon={brandingIcon}
              title="Branding"
              // delayclass="animate__delay-1s"
              defaultClass='cards col-md-3 col-sm-12 col-xs-12 hidden'
              para="A small river named Duden flows by their place and supplies 
                        it with the necessary regelialia. It is a paradisematic country, 
                        in which roasted parts of sentences fly into your mouth."
            />
            <Cards
              icon={searchOpIcon}
              title="Search Optimization"
              // delayclass="animate__delay-1s"
              defaultClass='cards col-md-3 col-sm-12 col-xs-12 hidden'
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
