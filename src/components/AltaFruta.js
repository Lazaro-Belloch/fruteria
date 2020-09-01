import React, { Component }from 'react';
import './Alta.css';
import Axios from 'axios';

export const MensajeError = (props) => {

    if (!props.mensaje) {
        return null;
    }
  
    return (
        <div className="ui negative message">
            <div className="header">
                {props.mensaje}
            </div>
        </div>
    )
  }

export class AltaFruta extends Component {
    constructor(props){
        super(props)
        this.state = {
            fruta: "",
            precio: "",
            imagen: "",
            descripcion: ""
        }
    }
validate = () => {
    let frutaError = null;
    let precioError = null;
    let imagenError = null;
    let descripcionError = null;

    if (this.state.fruta.length < 1) {
        frutaError = "el nombre es obligatorio"
    }

    if (this.state.precio.length < 1) {
        precioError = "El precio es obligatorio."

    } else {

      if (!parseInt(this.state.precio)) {
        precioError = "El precio tiene que ser un número entero."
    }

    }

    if (this.state.imagen.length <1) {
        imagenError = "El campo es obligatorio."

    }

    if (this.state.descripcion.length< 25) {
        descripcionError = "La descripción no puede tener menos de 25 letras."
        
    }

    this.setState({
        frutaError,
        precioError,
        imagenError,
        descripcionError

    }

    )

    return !frutaError && !precioError && !imagenError && !descripcionError;

}

onSubmit = (e) => {
    console.log("Grabando")

    e.preventDefault();

    if (!this.validate())
        return;

    const {fruta, precio, imagen, descripcion} = this.state;

    const nuevaFruta = {

        name: fruta,
        price: precio,
        image: imagen,
        description: descripcion
    }

    Axios.post('http://localhost:4000/frutas', nuevaFruta).then(
        res => {

            console.log("Se grabó correctamente");

            this.setState(
                {
                    fruta:"",
                    precio: "",
                    imagen: "",
                    descripcion: ""

                }
            )
        }
    )
}

    onFrutaChange = e => {
        this.setState(
            {
                fruta: e.target.value
            }
        )
    }

    onPrecioChange = e => {
        this.setState(
            {
                precio: e.target.value
            }
        )
    }   

    onImagenChange = e => {
        this.setState(
            {
                imagen: e.target.value
            }
        )
    }

    onDescripcionChange = e => {
        this.setState(
            {
                descripcion: e.target.value
            }
        )
    }

    render() {
        return(
        
            <div className="container">

                <form className="ui form">
                    <label><h1>Fruta</h1></label>
                    <input type="text" name="fruta"
                        placeholder="Nombre Fruta" value={this.state.fruta}
                        onChange={this.onFrutaChange}/>
                    <MensajeError mensaje={this.state.frutaError}></MensajeError>

                </form>

                <form className="ui form">
                    <label><h1>Precio</h1></label>
                    <input type="text" name="precio"
                        placeholder="Precio fruta" value={this.state.precio}
                        onChange={this.onPrecioChange}/>
                    <MensajeError mensaje={this.state.precioError}></MensajeError> 
                </form>

                <form className="ui form">
                    <label><h1>Imagen</h1></label>
                    <input type="text" name="imagen"
                        placeholder="Carga imagen"
                        value={this.state.imagen}
                            onChange={this.onImagenChange} />
                        <MensajeError mensaje={this.state.imagenError}></MensajeError>
                </form>

                <form className="ui form">
                    <label><h1>Descripción</h1></label>
                    <input type="text" name="imagen"
                        placeholder="Mínimo 25 carácteres"
                        value={this.state.descripcion}
                            onChange={this.onDescripcionChange} />
                        <MensajeError mensaje={this.state.descripcionError}></MensajeError>
                </form>
                <button class="ui button" type="submit" onClick={this.onSubmit}>Grabar</button>
            </div>
        )
    }
}
export default AltaFruta;