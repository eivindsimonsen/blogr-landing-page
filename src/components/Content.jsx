import React from "react";

function Content(props) {
  return (
    <section className="content-container">
      <h3>{props.title}</h3>
      <div>
        <img src={props.image} alt="#" />
      </div>
      <div className="content-container-info wrapper">
        <div>
          <h3 className="wrapper">{props.firstContentTitle}</h3>
          <p>{props.firstP}</p>
        </div>
        <div>
          <h3 className="wrapper">{props.secondContentTitle}</h3>
          <p>{props.secondP}</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
