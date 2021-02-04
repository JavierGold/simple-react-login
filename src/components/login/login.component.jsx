import React from "react";
import './login.css'

export default class Login extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        
      };
    }


    render() {
        return (
            <div class="login-background">
            <div class="login-page">
            <div class="form">
                
              <div class="register-form">
              <h1>LOG IN</h1>
                <input type="text" placeholder="USUARIO"/>
                <input type="password" placeholder="CONTRASEÑA"/>
                <button>Iniciar Sesión</button>
              </div>
            </div>
          </div>
          </div>
        );
      }
    }