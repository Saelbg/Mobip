import React from "react";
import womanImage from "./img/woman.png";
import "./styles/Landing2.css";

class Landing extends React.Component {
  // const btnKnowMore = document.getElementById("btnKnowMore");

  render() {
    return (
      <div className="container">
        <div className="navigation">navegation bar</div>
        <div className="title">
          <h1 className="h1">Mobipp</h1>
        </div>
        <div className="paragraph">
          <p className="p">
            La nueva forma de moverse sosteniblemente por la ciudad, atraves de
            un modelo de inscripcion que te permite optimizar los gastos de
            transporte sin sacrificar tu comodidad.
          </p>
        </div>
        <div className="footer">
          <button id="btnKnowMore" className="button" onClick={this.knowMore}>
            Conoce mas
          </button>
        </div>
        <div className="rightPanel">
          <img className="image" src={womanImage}></img>
        </div>
      </div>
    );
  }

  knowMore() {
    console.log("Vamos bien");
  }
}

export default Landing;
