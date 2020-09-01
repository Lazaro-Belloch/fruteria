import React, { Component } from 'react';
import Verduras from "./Verduras";
import axios from 'axios';
import "./Listas.css";



export class ListaVerduras extends Component {
    constructor(props) {
        super(props);
            this.state = {
                verduras : [],
            }
        }

    componentDidMount() {

        axios.get("http://localhost:4000/verduras").then(
            res => {
                this.setState(
                    {
                        verduras: res.data
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
                <div className={'listaVerduras'}>
                    {
                        this.state.verduras.map(
                            p =>
                            <Verduras valor={p}></Verduras>
                        )
                    }
                </div>
                
                



            </div>
            
        )
    }
}

export default ListaVerduras;