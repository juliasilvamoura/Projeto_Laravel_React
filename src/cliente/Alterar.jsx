import React from "react";
import { Link } from "react-router-dom";
import { findClienteByTd } from "../service/ClienteService";
import { validarCliente } from "../validacao/ValidCliente";
import Cabecalho from "../components/Cabecalho";
import Nav from "../components/Nav";

class AlterarCliente extends React.Component {
  constructor(props) {
    super();
    this.state = this.initState();
  }

  initState = () => ({
    id: undefined,
    nome: "",
    endereco: "",
    cpf: "",
    telefone: "",
    bairro: "",
    numero: "",
    cidade: "",
    estado: "",

    toReturn: false,

    formValidation: {
      nome: [],
      endereco: [],
      cpf: [],
      telefone: [],
      bairro: [],
      numero: [],
      cidade: [],
      estado: [],

      validNome: false,
      validEndereco: false,
      validCpf: false,
      validTelefone: false,
      validBairro: false,
      validNumero: false,
      validCidade: false,
      validEstado: false,
    },
  });

  componentDidMount() {
    const { id } = this.props.match.params;
    this.loadData(id);
  }

  async loadData(id) {
    const resposta_servidor = await findClienteByTd(id);

    console.log(resposta_servidor);
    this.setState({
      id: resposta_servidor.cliente.id,
      nome: resposta_servidor.cliente.nome,
      cpf: resposta_servidor.cliente.cpf,
      endereco: resposta_servidor.cliente.endereco,
      telefone: resposta_servidor.cliente.telefone,
      bairro: resposta_servidor.cliente.bairro,
      numero: resposta_servidor.cliente.numero,
      cidade: resposta_servidor.cliente.cidade,
      estado: resposta_servidor.cliente.estado,
    });
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validarDigitacaoCliente() {
    const { toReturn, formValidation } = this.state;
    let state = validarCliente(this.state);
    this.setState({
      toReturn: state.toReturn,
      formValidation: state.formValidation,
    });
    return state.toReturn;
  }


  async handleSubmitCliente(e) {
    e.preventDefault();
    if (this.validarDigitacaoCliente() === false) {
    const {
      id,
      nome,
      cpf,
      endereco,
      telefone,
      bairro,
      numero,
      cidade,
      estado,
    } = this.state;

    let cliente = {
      id: id,
      nome: nome,
      cpf: cpf,
      endereco: endereco,
      telefone: telefone,
      bairro: bairro,
      numero: numero,
      cidade: cidade,
      estado: estado,
    };

    const resposta_servidor = await updateCliente(cliente);

    this.setState(
      {
        state: this.initState(),
      },
      listarCliente()
    );
    }
  }

  listarCliente = () => {
    this.props.history.push("/cliente/listar");
  };

  render() {
    const { nome, cpf, endereco, telefone, bairro, numero, cidade, estado, formValidation } =
      this.state;

    return (
      <div className="container pt-5">
        <Nav/>
        <Cabecalho path="/cliente/listar" tituloPagina="Cadastro de Clientes" tituloPesquisa="Lista de Clientes"/>
        <div className="title">
          <div className="title-body">
            <form onSubmit={(e) => this.handleSubmitCliente(e)}>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="nome" className="control-label">
                      Nome:
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={nome}
                      onChange={() => this.onChange(e)}
                      id="nome"
                      className={formValidation.validNome === true ? "form-control is-invalid" : "form-control"}
                    />
                    {
                      formValidation.validNome &&(
                        <div className = "invalid-feedback">
                          {
                            formValidation.nome.map((erro, index) =>{
                              return(
                              <p key={index} style = {{margin: "0"}}>
                                <span>{erro}</span>
                              </p>
                              )
                            })
                          }

                        </div>
                      )
                    }
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="cpf" className="control-label">
                      Cpf:
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      value={cpf}
                      onChange={() => this.onChange(e)}
                      id="cpf"
                      className={formValidation.validCpf === true ? "form-control is-invalid" : "form-control"}
                    />
                    {
                      formValidation.validCpf &&(
                        <div className = "invalid-feedback">
                          {
                            formValidation.cpf.map((erro, index) =>{
                              return(
                              <p key={index} style = {{margin: "0"}}>
                                <span>{erro}</span>
                              </p>
                              )
                            })
                          }

                        </div>
                      )
                    }
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="telefone" className="control-label">
                      Telefone:
                    </label>
                    <input
                      type="text"
                      name="telefone"
                      value={telefone}
                      onChange={() => this.onChange(e)}
                      id="telefone"
                      className={formValidation.validTelefone === true ? "form-control is-invalid" : "form-control"}
                    />
                    {
                      formValidation.validTelefone &&(
                        <div className = "invalid-feedback">
                          {
                            formValidation.telefone.map((erro, index) =>{
                              return(
                              <p key={index} style = {{margin: "0"}}>
                                <span>{erro}</span>
                              </p>
                              )
                            })
                          }

                        </div>
                      )
                    }
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="endereco" className="control-label">
                      Endereco:
                    </label>
                    <input
                      type="text"
                      name="endereco"
                      value={endereco}
                      onChange={() => this.onChange(e)}
                      id="endereco"
                      className={formValidation.validEndereco === true ? "form-control is-invalid" : "form-control"}
                    />
                    {
                      formValidation.validEndereco &&(
                        <div className = "invalid-feedback">
                          {
                            formValidation.endereco.map((erro, index) =>{
                              return(
                              <p key={index} style = {{margin: "0"}}>
                                <span>{erro}</span>
                              </p>
                              )
                            })
                          }

                        </div>
                      )
                    }
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="bairro" className="control-label">
                      Bairro:
                    </label>
                    <input
                      type="text"
                      name="bairro"
                      value={bairro}
                      onChange={() => this.onChange(e)}
                      id="bairro"
                      className={formValidation.validBairro === true ? "form-control is-invalid" : "form-control"}
                    />
                     {
                      formValidation.validBairro &&(
                        <div className = "invalid-feedback">
                          {
                            formValidation.bairro.map((erro, index) =>{
                              return(
                              <p key={index} style = {{margin: "0"}}>
                                <span>{erro}</span>
                              </p>
                              )
                            })
                          }

                        </div>
                      )
                    }
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="numero" className="control-label">
                      Numero:
                    </label>
                    <input
                      type="text"
                      name="numero"
                      value={numero}
                      onChange={() => this.onChange(e)}
                      id="numero"
                      className={formValidation.validNumero === true ? "form-control is-invalid" : "form-control"}
                    />
                    {
                      formValidation.validNumero &&(
                        <div className = "invalid-feedback">
                          {
                            formValidation.numero.map((erro, index) =>{
                              return(
                              <p key={index} style = {{margin: "0"}}>
                                <span>{erro}</span>
                              </p>
                              )
                            })
                          }

                        </div>
                      )
                    }
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="cidade" className="control-label">
                      Cidade:
                    </label>
                    <input
                      type="text"
                      name="cidade"
                      value={cidade}
                      onChange={() => this.onChange(e)}
                      id="cidade"
                      className={formValidation.validCidade === true ? "form-control is-invalid" : "form-control"}
                    />
                    {
                      formValidation.validCidade &&(
                        <div className = "invalid-feedback">
                          {
                            formValidation.cidade.map((erro, index) =>{
                              return(
                              <p key={index} style = {{margin: "0"}}>
                                <span>{erro}</span>
                              </p>
                              )
                            })
                          }

                        </div>
                      )
                    }
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="estado" className="control-label">
                      Estado:
                    </label>
                    <input
                      type="text"
                      name="estado"
                      value={estado}
                      onChange={() => this.onChange(e)}
                      id="estado"
                      className={formValidation.validEstado === true ? "form-control is-invalid" : "form-control"}
                    />
                    {
                      formValidation.validEstado &&(
                        <div className = "invalid-feedback">
                          {
                            formValidation.estado.map((erro, index) =>{
                              return(
                              <p key={index} style = {{margin: "0"}}>
                                <span>{erro}</span>
                              </p>
                              )
                            })
                          }

                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
              <input type="hidden" id="id" name="id" value={id} />
              <div className="center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  title="Incluir novo Registro"
                >
                  Salvar Dados do Cliente
                </button>
                <Link
                  to="/cliente/listar"
                  className="btn btn-secondary btn-lg ml-3"
                  title="Cancelar a Inclusão"
                >
                  Cancelar Inclusão do Cliente
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AlterarCliente;
