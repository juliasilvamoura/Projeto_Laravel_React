import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { findAllCliente } from '../service/ClienteService';
import Cabecalho from "../components/Cabecalho";
import Nav from "../components/Nav";


class ListarCliente extends Component{

    constructor(){
        super()
        this.state = this.initState();
        this.setNumberPaginaAtual = this.setNumberPaginaAtual.bind(this);
    }

    initState = () => ({
        cliente:[],
        paginaAtual:1,
        pageSize:5,
        dir:'asc',
        props:'id',
        total:0,
        paginaFim:0,
        search:'',
        
    });

    componentDidMount(){
       this.loadData();
    }

    async loadData(){
        const { paginaAtual, pageSize, dir, asc, search} = this.state;
        const clientes = await findAllCliente(paginaAtual, pageSize, dir, asc, search);
        this.setState({
            clientes:clientes.data,
            paginaAtual:clientes.paginAtual,
            pageSize:clientes.pageSize,
            paginaFim:clientes.paginaFim,
            total:clientes.total,
        });  
    }

    setNumberPaginaAtual = (pagina) =>{
        this.setState({
            paginaAtual:pagina
        }, () => this.updateState())
    }

    updateState = () => {
        this.loadData();
    }

    render (){

        const {clientes , paginaAtual, pageSize, paginaFim, total} = this.state

        return(
            <div>
                <div className="container">
                    <Nav></Nav>
                    <Cabecalho path="/cliente/listar" tituloPagina="Cadastro de Clientes" tituloPesquisa="Lista de Clientes"/>
            
{/*  <div className="container">
        <div className="app-title">
            <h1>
                <i className="fa fa-edit">Lista de Usuários</i>
            </h1>
            <ul className="app-breadcrumb creadcrumb">
                <li className="breadcrumb-item"><i className="fa fa-search fa-lg"></i></li>
                <li className="breadcrumb-item"><a href="#">Menu principal</a></li>
            </ul>
        </div> 
        </div> */}
    

    <div className="container">
        <div className="tile">
            <div className="tile-body">
                <div id="no-more-tables">
                    <table className="table table-striped table-bordered table-hover cf">
                        <thead className="cf">
                            <tr>
                               <th>Id</th>
                               <th>Nome</th> 
                               <th>Ações</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            
                        {cliente.map( (cliente)=>(
                            <tr key= {cliente.id}>

                                <td>{cliente.id}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.acao}</td>
                            <td>
                                <Link className="btn btn-info btn-sm" to={`/cliente/alterar/ ${cliente.id}`}><i className="fa fa-pencil"></i></Link>
                                <a className="btn btn-danger btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                <a className="btn btn-warning btn-sm" href="#"><i className="fa fa-address-book"></i></a>
                            </td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                    <Paginacao paginaAtual={paginaAtual}
                               pageSize={pageSize}
                               paginaFim= {paginaFim}
                               total={total}
                               setRenderPaginaCorrente={(pagina) => this.setNumberPaginaAtual(pagina)}/>
                    <Link className="btn btn-success btn-lg" to="/cliente/cadastrar" title="Cadastrar novo Registro"><i className="fa fa-circle"></i></Link>
                </div>
            </div>
        </div>
    </div>
            </div>
            </div>
        )
    }
}
                     

export default ListarCliente;




