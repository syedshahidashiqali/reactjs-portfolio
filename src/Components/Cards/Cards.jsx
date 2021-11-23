import "./Cards.css";

function Cards({icon, title, para}) {
    return (
        <div className="cards col-md-3 col-sm-12 col-xs-12">
            {/* <div> */}
                <img className="cardIcon" src={icon} alt="" />
                <h5 className="cardTitle">{title}</h5>
                <p className="cardDetail">
                {para}
                </p>
            {/* </div> */}
        </div>
    );
};

export default Cards;
