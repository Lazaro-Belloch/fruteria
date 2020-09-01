import React from 'react';
import './Frutas.css';

const Frutas = (props) => {

    console.log(props.valor)

    return (

    <div>

      {/* <div className="ui centered card">

        <div className="center aligned header, color">   {props.valor.name} </div>

        <div className="image"> <img alt="" src={props.valor.image}></img> </div>

        <div className="content, color-bajo"> {props.valor.price} € </div>

        <button className="ui grey button"> Añadir fruta</button>

      </div> */}
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <img className="right floated  ui image" src={props.valor.image}></img>
            <div className="header">{props.valor.name}</div>
            {/* <div className="meta">Friends of Veronika</div> */}
            <div className="description">{props.valor.description}</div>
          </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Al carrito</div>
            {/* <div className="ui basic red button">Decline</div> */}
          </div>
        </div>
        </div>
      </div>
    </div>
  
      )
}

export default  Frutas