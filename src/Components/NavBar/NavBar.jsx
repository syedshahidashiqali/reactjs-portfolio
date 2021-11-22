import "./NavBar.css";

function NavBar() {
    return (
        <div className="navBar">
            <div className="header flex">
                <span className="headerText">Phone no: <b>+00 1234 567</b> or email us: <b>emailsample@email.com</b></span>
                <div className="navBarIconsContainer">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-dribbble"></i>
                </div>
            </div>
            <header className="nav">
                <nav>
                    <ul className="flex">
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
                    <h1 className="mainRightDo">WE CREATE WEBSITE THE WAY YOU WANT WITH PROTECH</h1>
                    <h6 className="mainRightDetail">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h6>
                    <div className="buttonsContainer mt-3">
                        <button className="learnMoreBtn">Learn More</button>
                        <button className="viewBtn">View Portfolio</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NavBar;
