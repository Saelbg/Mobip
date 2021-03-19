import React from "react";
import womanImage from "./img/woman.png";
import "./styles/Landing.css";

class Landing extends React.Component {
  // const btnKnowMore = document.getElementById("btnKnowMore");

  render() {
    return (
      <div className="Container">
        <div className="MenuBar">
          <div className="MenuButtons">
            <div>boton1</div>
          </div>
        </div>
        <h1 className="Title">MoBip</h1>
        <div className="Line" />
        <p className="Paragraph">
          La nueva forma de moverse sosteniblemente por la ciudad, atraves de un
          modelo de inscripcion que te permite optimizar los gastos de
          transporte sin sacrificar tu comodidad.
        </p>
        <button id="btnKnowMore" className="Button" onClick={this.knowMore}>
          Conoce mas!
        </button>
        <div className="SidePanel"></div>
        <img className="Image" src={womanImage}></img>
      </div>
    );
  }

  knowMore() {
    console.log("Vamos bien");
  }
}

export default Landing;
