import React, { Component } from 'react';
import Frutas from "./Frutas";
import axios from 'axios';
import "./Listas.css";

export class ListaFrutas extends Component {
    constructor(props) {
        super(props);
            this.state = {
                frutas : [],
            }
        }

    componentDidMount() {

        axios.get("http://localhost:4000/frutas").then(
            res => {
                this.setState(
                    {
                        frutas: res.data
                    }
                )
            }
        ).catch(
            console.error
        )
    }

    render() {
        return (
            <div>
                <div className={'listaFrutas'}>
                    {
                        this.state.frutas.map(
                            p =>
                            <Frutas valor={p}></Frutas>
                        )
                    }
                </div>
                
                



            </div>
            
        )
    }
}

export default ListaFrutas;