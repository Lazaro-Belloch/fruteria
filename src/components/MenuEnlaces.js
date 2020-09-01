import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './MenuEnlaces.css';

export const LISTA_VERDURAS = "ListaVerduras";
export const LISTA_FRUTAS = "ListaFrutas";
export const LISTA_VARIOS = "ListaVarios";
export const ALTA = "Alta";
export const LOGIN ="Login";

export class MenuEnlaces extends Component {
    render() {
        return (
            <div className="menu-lateral">
                {/* <img src="/logo192.png" alt="Imagen logo"></img>  */}
                <div>
                    
                    
                    <div className="alignedRigth">
                    <div className="ui aligned menu">
                    <div className="header item ">
                            <img src="./img/logo.jpg" alt="" width="20%" height="auto" href="http://localhost:3000"></img>
                    </div>
                        <a className="item">
                            <Link to="/verduras" className={this.props.active === LISTA_VERDURAS ? "active item" : "item"}>
                                Verduras</Link>
                        </a>
                        <a className="item">
                            <Link to="/frutas" className={this.props.active === LISTA_FRUTAS ? "active item" : "item"}>
                                Frutas</Link>
                        </a>
                        <a className="item">
                            <Link to="/varios" className={this.props.active === LISTA_VARIOS ? "active item" : "item"}>
                                Varios</Link>
                        </a>
                        <a className="item">
                            <Link to="/altaFruta" className={this.props.active === ALTA ? "active item" : "item"}>
                                Alta fruta</Link>
                        </a>

                        <a className="item">
                            <Link to="/altaVerduras" className={this.props.active === ALTA ? "active item" : "item"}>
                                Alta Verduras</Link>
                        </a>

                        <a className="item">
                            <Link to="/altaVarios" className={this.props.active === ALTA ? "active item" : "item"}>
                                Alta Varios</Link>
                        </a>
                        
                        <a className="item">
                            <Link to="/login" className={this.props.active === LOGIN ? "active item" : "item"}>
                                Login</Link>
                        </a>

                        <a className="item ">
                            <div>
                                <input className="busqueda" type="search" id="miBusqueda" name="q" placeholder="Busqueda"></input>
                                <button className="busqueda">Buscar</button>
                                <form method="GET" action="http://www.google.com/search">
                                <table bgcolor="#FFFFFF">
                                    <tr>
                                        <td>
                                            <a HREF="http://www.google.com/"></a>
                                            <img SRC="http://www.google.com/logos/Logo_40wht.gif" border="0" ALT="Google" align="absmiddle"></img>
                                            <input className="busqueda" TYPE="text" name="q" size="31" maxlength="255" value="" placeholder="Busqueda"></input>
                                            <input className="busqueda" TYPE="hidden" name="hl" value="es"></input>
                                            <input className="busqueda" type="submit" name="btnG" VALUE="Búsqueda Google"></input>
                                        </td>
                                    </tr>
                                </table>
                                </form>
                            </div>

                        </a>
                    </div>
                    </div>

                </div>
                    
                </div>

            

        )
    }
}

export default MenuEnlaces;