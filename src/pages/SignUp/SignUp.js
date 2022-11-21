import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import UsualButton from "../../assets/styles/UsualButton";
import StyledSignInScreen from "./StyledSignInScreen";

export default function SignUp() {

    const [formValue, setFormValue] = React.useState({
        "username":"",
        "email": "",
        "password": "",
        "repeatPassword": ""
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
    
    function signUp(event) {
        event.preventDefault();
        const promise = axios.post("//localhost:5000/sign-up", formValue);
        promise.then(response => {
            alert("Account created succesfully!")
            navigate("/")    
        })
        .catch(e => alert(e.response.data))
    }  

    return (
        <StyledSignInScreen>
            <h1>MyWallet</h1>
            <form onSubmit={signUp}>
                <input onChange={handleChange} name="username" value={formValue.username} required type="text" placeholder="Nome"></input>
                <input onChange={handleChange} type="email" placeholder="Email" name="email" value={formValue.email} required></input>
                <input onChange={handleChange} type="password" placeholder="Senha" name="password" value={formValue.password} required></input>
                <input onChange={handleChange} type="password" placeholder="Confirme a senha" name="repeatPassword" value={formValue.repeatPassword} required></input>
                <UsualButton type="submit">Entrar</UsualButton>
            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </StyledSignInScreen>
    )
}