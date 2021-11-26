import "./Cards.css";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
function Cards({icon, title, para, defaultClass}) {

    const [classNames, setClassNames] = useState("cards col-md-3 col-sm-12 col-xs-12 hidden")
    // const [cardFocus, setCardFocus] = useState(false)
    return (
        <div className={classNames}>

            <VisibilitySensor onChange={(isVisible) => {
              console.log("Card is now %s", isVisible ? "visible" : "hidden");
              if(isVisible){
                //   setCardFocus(true)
                  setClassNames(`${defaultClass} show animate__animated animate__zoomIn`)
                //   console.log(isVisible)
              }
            }}>
                <>
                    <img className="cardIcon" src={icon} alt="" />
                    <h5 className="cardTitle">{title}</h5>
                    <p className="cardDetail">
                    {para}
                    </p>
                </>
            </VisibilitySensor>
        </div>
    );
};

export default Cards;
