import './Staff.css';

function Staff() {
    return (
        <div className="staff">
            <div className="container staff-container">
                <div className="row d-flex ai-c py-5">
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <h6 className="staff-title">TEAM & STAFF</h6>
                        <h2 className="staff-team">Our Team</h2>
                        <p className="staff-para">
                        A small river named Duden flows by their place and supplies it with 
                        the necessary regelialia. It is a paradisematic country.
                        </p>
                        <button className="staff-btn">View All Staff</button>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12 staff-card staff-card-1 px-0">
                        <img style={{width:"100%", margin:"0px 0px", padding:"0px 0px"}} src="https://preview.colorlib.com/theme/portech/images/xstaff-1.jpg.pagespeed.ic.e9rH06n9-0.webp" alt="" />
                        <div className="staff-child">
                            <h5>Lloyd Wilson</h5>
                            <h6>WEB DEVELOPER</h6>
                            <div className="staff-icons">
                                <i class="fab fa-twitter-square"></i>
                                <i class="fab fa-facebook-square"></i>
                                <i class="fab fa-google-plus-square"></i>
                                <i class="fab fa-instagram-square"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12 staff-card staff-card-2 px-0">
                        <img style={{width:"100%", margin:"0px 0px", padding:"0px 0px"}} src="https://preview.colorlib.com/theme/portech/images/xstaff-2.jpg.pagespeed.ic.336NftRDi2.webp" alt="" />
                        <div className="staff-child">
                            <h5>Lloyd Wilson</h5>
                            <h6>WEB DEVELOPER</h6>
                            <div className="staff-icons">
                                <i class="fab fa-twitter-square"></i>
                                <i class="fab fa-facebook-square"></i>
                                <i class="fab fa-google-plus-square"></i>
                                <i class="fab fa-instagram-square"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12 staff-card staff-card-3 px-0">
                    <img style={{width:"100%", margin:"0px 0px", padding:"0px 0px"}} src="https://preview.colorlib.com/theme/portech/images/xstaff-3.jpg.pagespeed.ic.uXRWIVCMLJ.webp" alt="" />
                        <div className="staff-child">
                            <h5>Lloyd Wilson</h5>
                            <h6>WEB DEVELOPER</h6>
                            <div className="staff-icons">
                                <i class="fab fa-twitter-square"></i>
                                <i class="fab fa-facebook-square"></i>
                                <i class="fab fa-google-plus-square"></i>
                                <i class="fab fa-instagram-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staff;
