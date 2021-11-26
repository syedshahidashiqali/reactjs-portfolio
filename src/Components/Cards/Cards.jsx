import "./Cards.css";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
function Cards({icon, title, para, defaultClass}) {

    const [classNames, setClassNames] = useState(defaultClass)
    // const [cardFocus, setCardFocus] = useState(false)
    return (
        <div className={classNames}>

            <VisibilitySensor onChange={(isVisible) => {
              console.log("Card is now %s", isVisible ? "visible" : "hidden");
              if(isVisible){
                //   setCardFocus(true)
                  setClassNames(`${classNames.replace("hidden","show")} animate__animated animate__zoomIn`)
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
