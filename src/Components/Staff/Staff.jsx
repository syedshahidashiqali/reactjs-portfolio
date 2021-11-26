import './Staff.css';
import VisibilitySensor from "react-visibility-sensor";
import {useState} from "react";

function Staff() {

    // ALL STATES WITHIN THIS COMPONENT
    const [firstClass, setFirstClass] = useState("col-md-3 col-sm-12 col-xs-12 px-0 mb-5 staff-item hidden");
    const [secondClass, setSecondClass] = useState("col-md-3 col-sm-12 col-xs-12 staff-card staff-card-1 px-0 mb-5 hidden");
    const [thirdClass, setThirdClass] = useState("col-md-3 col-sm-12 col-xs-12 staff-card staff-card-2 px-0 mb-5 hidden");
    const [fourthClass, setFourthClass] = useState("col-md-3 col-sm-12 col-xs-12 staff-card staff-card-3 px-0 mb-5 hidden");
    const [firstIcon, setFirstIcon] = useState("staff-icons hidden");
    const [secondIcon, setSecondIcon] = useState("staff-icons hidden");
    const [thirdIcon, setThirdIcon] = useState("staff-icons hidden");
    const [btnState, setBtnState] = useState("staff-btn hidden")

    return (
        <div className="staff pt-4">
            <div className="container staff-container">
                <div className="row d-flex ai-c jc-sb py-5">
                    <div className={firstClass}>
                        <VisibilitySensor onChange={(isVisible) => {
                            console.log("StaffCardSection 1st section is now %s", isVisible ? "visible" : "hidden");
                            if(isVisible){
                                setFirstClass(`${firstClass.replace("hidden","show")} animate__animated animate__fadeInUp`);
                                setBtnState(`${btnState.replace("hidden","show")} animate__animated animate__rotateIn`);
                            //   console.log(isVisible)
                            }
                        }}>
                            <>
                            <h6 className="staff-title">TEAM & STAFF</h6>
                            <h2 className="staff-team">Our Team</h2>
                            <p className="staff-para">
                            A small river named Duden flows by their place and supplies it with 
                            the necessary regelialia. It is a paradisematic country.
                            </p>
                            <button className={btnState}>View All Staff</button>
                            </>
                        </VisibilitySensor>
                    </div>
                    <div className={secondClass}>
                        <VisibilitySensor onChange={(isVisible) => {
                            console.log("StaffCardSection 2nd section is now %s", isVisible ? "visible" : "hidden");
                            if(isVisible){
                                setSecondClass(`${secondClass.replace("hidden","show")} animate__animated animate__fadeInUp`);
                                setFirstIcon(`${firstIcon.replace("hidden", "show")} animate__animated animate__rotateIn`)

                            //   console.log(isVisible)
                            }
                        }}>
                            <>
                            <img style={{height:"300px", width:"100%", margin:"0px 0px", padding:"0px 0px"}} src="https://preview.colorlib.com/theme/portech/images/xstaff-1.jpg.pagespeed.ic.e9rH06n9-0.webp" alt="" />
                            <div className="staff-child">
                                <h5>Lloyd Wilson</h5>
                                <h6>WEB DEVELOPER</h6>
                                <div className={firstIcon}>
                                    <i className="fab fa-twitter-square"></i>
                                    <i className="fab fa-facebook-square"></i>
                                    <i className="fab fa-google-plus-square"></i>
                                    <i className="fab fa-instagram-square"></i>
                                </div>
                            </div>
                            </>
                        </VisibilitySensor>
                    </div>
                    <div className={thirdClass}>
                        <VisibilitySensor onChange={(isVisible) => {
                            console.log("StaffCardSection 3rd section is now %s", isVisible ? "visible" : "hidden");
                            if(isVisible){
                                setThirdClass(`${thirdClass.replace("hidden","show")} animate__animated animate__fadeInUp`);
                                setSecondIcon(`${secondIcon.replace("hidden", "show")} animate__animated animate__rotateIn`);
                            //   console.log(isVisible)
                            }
                        }}>
                            <>
                            <img style={{height:"300px", width:"100%", margin:"0px 0px", padding:"0px 0px"}} src="https://preview.colorlib.com/theme/portech/images/xstaff-2.jpg.pagespeed.ic.336NftRDi2.webp" alt="" />
                            <div className="staff-child">
                                <h5>Lloyd Wilson</h5>
                                <h6>WEB DEVELOPER</h6>
                                <div className={secondIcon}>
                                    <i className="fab fa-twitter-square"></i>
                                    <i className="fab fa-facebook-square"></i>
                                    <i className="fab fa-google-plus-square"></i>
                                    <i className="fab fa-instagram-square"></i>
                                </div>
                            </div>
                            </>
                        </VisibilitySensor>
                    </div>
                    <div className={fourthClass}>
                        <VisibilitySensor onChange={(isVisible) => {
                            console.log("StaffCardSection 4th section is now %s", isVisible ? "visible" : "hidden");
                            if(isVisible){
                                setFourthClass(`${fourthClass.replace("hidden","show")} animate__animated animate__fadeInUp`);
                                setThirdIcon(`${thirdIcon.replace("hidden", "show")} animate__animated animate__rotateIn`);
                            //   console.log(isVisible)
                            }
                        }}>
                            <>
                            <img style={{height:"300px", width:"100%", margin:"0px 0px", padding:"0px 0px"}} src="https://preview.colorlib.com/theme/portech/images/xstaff-3.jpg.pagespeed.ic.uXRWIVCMLJ.webp" alt="" />
                                <div className="staff-child">
                                    <h5>Lloyd Wilson</h5>
                                    <h6>WEB DEVELOPER</h6>
                                    <div className={thirdIcon}>
                                        <i className="fab fa-twitter-square"></i>
                                        <i className="fab fa-facebook-square"></i>
                                        <i className="fab fa-google-plus-square"></i>
                                        <i className="fab fa-instagram-square"></i>
                                    </div>
                                </div>
                            </>    
                        </VisibilitySensor>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staff;
