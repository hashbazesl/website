import React from "react";
import "./serviceCard.css";


const ServiceCard = (props) => {
  return (
    <div className="serviceCard">
      <img className="serviceImg" src={props.img[props.index]} alt=""/>
      <h2 className="serviceName">{props.title}</h2>
      <h3 className="serviceDesc">{props.desc}</h3>
    </div>
  );
};
export default ServiceCard;
