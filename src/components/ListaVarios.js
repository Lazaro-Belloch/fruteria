import React, { Component } from 'react';
import Varios from "./Varios.js";
import axios from 'axios';
import "./Listas.css";



export class ListaVarios extends Component {
    constructor(props) {
        super(props);
            this.state = {
                varios : [],
            }
        }

    componentDidMount() {

        axios.get("http://localhost:4000/varios").then(
            res => {
                this.setState(
                    {
                        varios: res.data
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
                <div className={'listaVarios'}>
                    {
                        this.state.varios.map(
                            p =>
                            <Varios valor={p}></Varios>
                        )
                    }
                </div>
                
                



            </div>
            
        )
    }
}

export default ListaVarios;