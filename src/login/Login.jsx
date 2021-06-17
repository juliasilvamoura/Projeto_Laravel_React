import React from 'react';
import { findUserByEmail } from '../service/LoginService';


class Login extends Component {
    constructor(){
        super()
        this.state=this.initState(),
        this.onLogin = this.onLogin.bind(this),
    }
    initState= () => ({
        email:'',
        password:'',

        formValidation:{
            email: [],
            password: [],

            validEmail:false,
            validPassword:false,
        },
        mensagem:[],
        showMensagem:false,
    })

    onChange=(e) => {
        const {name, value} = e.target;
        this.setState({
        [name]:value,
        })
    }

  async onLogin() {
        e.preventDefault();
        const {email,password} = this.state;
        let usuario = undefined;
        usuario = await findUserByEmail(email, password);
    }

    render() { 
        const {email, password} = this.initState;
        return (
            <React.Fragment>
            <section class="material-half-bg">
            <div class="cover"></div>
        </section>
        <section className="login-content">
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="fa fa-check-circle"></i>
                    <span>
                        <strong></strong>
                    </span>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                </div>
           
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <i className="fa fa-check-circle"></i>
                  <span>
                      <strong></strong>
                  </span>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
           
            <div className="logo">
                <h1>Projeto</h1>
            </div>
            <div className="login-box">
                <form className="login-form" method="POST" action=""></form>
    
               
                    <h3 className="login-head"><i className="fa fa-lg fa-fw fa-user"></i>Acessar </h3>
                    <div className="form-group">
                        <label for="email" className="control-label">E-mail</label>
                        <input  
                        type="text" 
                        id="email" 
                        name="email"
                        placeholder="Email" autofocus>

                        <div className="invalid-feedback">
                            <span><strong>{{ $message }}</strong></span>
                        </div>

                    </div>
                    <div className="form-group">
                        <label for="password" className="control-label">Senha</label>
                        <input className="form-control  @error('password') is-invalid @enderror" type="password" id="password"
                            name="password" placeholder="Password">

                        <div className="invalid-feedback">
                            <span><strong>{{ $message }}</strong></span>
                        </div>

                    </div>
                    <div className="form-group">
                        <div className="utility">
                        <p className="semibold-text mb-2"><a href="#">Recuperar Senha?</a></p>
                            <p className="semibold-text mb-2"><a href="#">Registrar-se ?</a></p>
                        </div>
                    </div>
                    <div className="form-group btn-container">
                        <button className="btn btn-primary btn-block"
                        onClick={(e)=>this.onLogin(e)}><i className="fa fa-sign-in fa-lg fa-fw"></i>Acessar</button>
                    </div>
                    <div className="form-group">
                        <div className="utility">
                            <div className="animated-checkbox">
                                <label>
                                    <input type="checkbox" id="checkRememberMe" name="checkRememberMe"><span
                                        className="label-text">Mantenha-se conectado</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
);
    }
}
</React.Fragment>
 
export default Login;