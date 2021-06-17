import { thisExpression } from '@babel/types';
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Cabecalho extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return( 
            <div className="pt-3">
            <div className="app-title">
            <h1>
                <i className="fa fa-edit">{this.props.tituloPagina}</i>
            </h1>
            <ul className="app-breadcrumb creadcrumb">
                <li className="breadcrumb-item"><i className="fa fa-search fa-lg"></i></li>
                <Link to={this.props.path}> {this.props.tituloPesquisa}</Link>
            </ul>
        </div>
        </div>
        );
    }
}

export default Cabecalho;