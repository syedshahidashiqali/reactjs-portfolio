import { useState } from "react";
import "./Summary.css";
import fileIcon from "../../images/file-icon.png";
import waiterIcon from "../../images/waiter-icon.png";
import customerServiceIcon from "../../images/customer-service-icon.png";
import happyCustomerIcon from "../../images/happy-customer-icon.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const SummaryColumn = ({ src, num, title }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className="col-md-3 col-sm-12 col-xs-12 d-flex ai-c summaryCard"
      style={{ width: "250px" }}
    >
      <img
        style={{
          height: "80px",
          marginRight: "15px",
          backgroundColor: "#fff",
          padding: "5%",
          borderRadius: "5px",
          // margin:"0px 0px", padding:"0px 0px"
        }}
        src={src}
        alt=""
      />
      <div className="d-flex fd-column">
        <h4 className="summaryNum">
          <CountUp
            redraw={true}
            start={focus ? 0 : null}
            end={num}
            duration={5}
            separator={","}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <a>+</a>
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
        </h4>
        <h5 className="summaryTitle">{title}</h5>
      </div>
    </div>
  );
};
function Summary() {
  return (
    <div className="summary">
      <div className="container summary-container">
        <div className="row d-flex ai-c jc-sb summaryRow">
          <SummaryColumn
            src={fileIcon}
            num={4800}
            title={"PROJECT COMPLETED"}
          />
          <SummaryColumn src={waiterIcon} num={1000} title={"OUR STAFF"} />
          <SummaryColumn
            src={customerServiceIcon}
            num={350}
            title={"SERVICE PROVIDE"}
          />
          <SummaryColumn
            src={happyCustomerIcon}
            num={7650}
            title={"HAPPY CUSTOMERS"}
          />
          {/* <div className="col-md-3 col-sm-12 col-xs-12"></div>
                    <div className="col-md-3 col-sm-12 col-xs-12"></div>
                    <div className="col-md-3 col-sm-12 col-xs-12"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Summary;
