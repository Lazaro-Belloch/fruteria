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

export class AltaVarios extends Component {
    constructor(props){
        super(props)
        this.state = {
            varios: "",
            precio: "",
            imagen: "",
            descripcion: ""
        }
    }
validate = () => {
    let variosError = null;
    let precioError = null;
    let imagenError = null;
    let descripcionError = null;

    if (this.state.varios.length < 1) {
        variosError = "el nombre es obligatorio"
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
        variosError,
        precioError,
        imagenError,
        descripcionError

    }

    )

    return !variosError && !precioError && !imagenError && !descripcionError;

}

onSubmit = (e) => {
    console.log("Grabando")

    e.preventDefault();

    if (!this.validate())
        return;

    const {varios, precio, imagen, descripcion} = this.state;

    const nuevaVarios = {

        name: varios,
        price: precio,
        image: imagen,
        description: descripcion
    }

    Axios.post('http://localhost:4000/varios', nuevaVarios).then(
        res => {

            console.log("Se grabó correctamente");

            this.setState(
                {
                    varios:"",
                    precio: "",
                    imagen: "",
                    descripcion: ""

                }
            )
        }
    )
}

    onVariosChange = e => {
        this.setState(
            {
                varios: e.target.value
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
                    <label><h1>Producto</h1></label>
                    <input type="text" name="varios"
                        placeholder="Nombre Producto" value={this.state.fruta}
                        onChange={this.onVariosChange}/>
                    <MensajeError mensaje={this.state.variosError}></MensajeError>

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
export default AltaVarios;