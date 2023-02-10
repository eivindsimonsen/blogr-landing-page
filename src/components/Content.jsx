import React from "react";

function Content(props) {
  return (
    <section className={"content-container " + props.contentMargin}>
      <h3>{props.title}</h3>
      <div className={"content-container-desktop " + props.imageTwoWidth}>
        <div className={props.imageClassDesktop}>
          <img className="content-image-mobile" src={props.imageMobile} alt="#" />
          <img className="content-image-desktop" src={props.imageDesktop} alt="#" />
        </div>
        <div className={"content-container-info wrapper " + props.imagePm}>
          <div>
            <h3 className="wrapper">{props.firstContentTitle}</h3>
            <p>{props.firstP}</p>
          </div>
          <div>
            <h3 className="wrapper">{props.secondContentTitle}</h3>
            <p>{props.secondP}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
