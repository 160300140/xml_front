/* import React, { useState } from 'react'; */
import React, { Component } from 'react';
import '../../../scss/partials/Admin/_SignIn.scss';
import { NavLink } from 'react-router-dom';
import { UnlockOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
//import logo from '../../../../public/img/business.jpeg';
import loginimg from '../../../img/businessa.jpeg';
/*import { UserService } from './userService';*/

import axios from 'axios';
/* Está es la url de aws*/
/*const baseUrl = "http://ec2-18-189-16-61.us-east-2.compute.amazonaws.com:9001/SRM/User/";*/
/* Está es la url de Local*/
const baseUrlLocal = "http://localhost:9001/SRM/User/";


class SignIn extends Component {
    state = {
        form: {
            user_name: null,
            password: null
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    loginUser = async () => {
        console.log(this.state.form.user_name);
        console.log(this.state.form);
        /* Aquí es donde se manda la petición. */
        await axios.post(baseUrlLocal + "LoginUser", this.state.form).then(res => { return res.data }).then(res => {
            if (res.code === 200) {
                /* var respuesta=res[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});*/
                console.log(res.session.name);
                /* Aquí es donde se imprime el mensaje */
                alert(`Bienvenido ${res.session.name} ${res.session.last_name}`);
                window.location.href = "../home";
            } else {
                console.log(res.session.name);
                alert('El usuario o la contraseña no son correctos');
            }
        })
            .catch(error => {
                console.log(error);
            })
    }
    /*
        iniciarSesion=async()=>{
            await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
            .then(response=>{
                return response.data;
            })
            .then(response=>{
                if(response.length>0){
                    var respuesta=response[0];
                    cookies.set('id', respuesta.id, {path: "/"});
                    cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                    cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                    cookies.set('nombre', respuesta.nombre, {path: "/"});
                    cookies.set('username', respuesta.username, {path: "/"});
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                    window.location.href="./menu";
                }else{
                    alert('El usuario o la contraseña no son correctos');
                }
            })
            .catch(error=>{
                console.log(error);
            })
    
        }*/

    /* this.userService = new UserService();
    this.loginUser = this.loginUser.bind(this);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState(""); */

    render() {
        return (

            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <div class="card-group">
                        <div class="card" > 
                            <img class="card-img" src={loginimg} alt="login image" />
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-5">
                                    <UnlockOutlined style={{ fontSize: '160%', color: '#1de9b6' }} />
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Email" name="user_name" onChange={this.handleChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleChange} />
                                </div>
                                <div className="form-group text-left mb-3">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <Checkbox  > <span>Save credentials</span></Checkbox>
                                    </div>
                                </div>

                                <Button type="primary" shape="round" className="mb-3" onClick={() => this.loginUser()}>
                                    login
                                </Button>
                                <div className="form-group__signup mb-4">
                                    <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                    <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignIn;