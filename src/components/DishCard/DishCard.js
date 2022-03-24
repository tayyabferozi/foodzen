import React from "react";
import "./DishCard.css";
import dishImg from "assets/images/dish-img.png";
import CircleCard from "components/CircleCard/CircleCard";
import { Link } from "react-router-dom";
import clock from "assets/images/clock.png";
import fire from "assets/images/fire.png";
import _ from "lodash";

function DishCard({ card: { id, name, logo, description, total_time } }) {
  return (
    <div className="dish-card">
      <CircleCard
        content={<img src={logo} alt="" />}
        title={
          <div>
            <p className="fs-18px weight-6 ligh-black  mb-5 ">{name}</p>
            <p
              className="fs-9px weight-4 black "
              style={{ lineHeight: "15px", color: "black" }}
            >
              {description}
            </p>
          </div>
        }
        style={{
          minWidth: "91px",
          height: "91px",
          borderRadius: "50%",
        }}
        wrapperStyles={{
          alignItems: "center",
          justifyContent: "unset",
          gap: "10px",
          flexDirection: "row",
        }}
      />
      <div className="dish-btns">
        <Link
          to={`/${id}/${_.snakeCase(name)}-recipe`}
          className="dish-view-recipe-btn"
        >
          View Recipe
        </Link>

        <div className="row" style={{ gap: "15px" }}>
          <div className="row align-center" style={{ gap: "8px" }}>
            <img src={fire} alt="" style={{ width: "10px" }} />
            <p className="fs-9px light-black">100 KCal</p>
          </div>
          <div className="row align-center" style={{ gap: "8px" }}>
            <img src={clock} alt="" style={{ width: "10px" }} />
            <p className="fs-9px light-black">{total_time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
