import React from "react";
import "./MixtureCard.css";

function Image({ img, alt }) {
  return <img src={img} alt={alt} />;
}

function MixtureCard(props) {
  return (
    <div className="mixture-card">
      <div className="mixture-card-images">
        <Image img={props.mixtureItems[0]} alt={props.data?.logo_1_alt} />
        <div className="add-sign"></div>
        <Image img={props.mixtureItems[1]} alt={props.data?.logo_2_alt} />
      </div>
      <div className="mixture-card-title fs-15px">
        {props.data?.question_text}
      </div>

      <div className="mixture-card-btns">
        <a target="blank" href={props.data?.yes_link} className="fs-15px">
          <button>Yes, I agree</button>
        </a>
        <a target="blank" href={props.data?.no_link} className="fs-15px">
          <button>No, I don’t</button>
        </a>
      </div>
    </div>
  );
}

export default MixtureCard;
