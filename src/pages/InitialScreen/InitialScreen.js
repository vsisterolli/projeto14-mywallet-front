import StyledInitialScreen from "./StyledInitialScreen"
import { Link, useNavigate } from "react-router-dom"
import UsualButton from "../../assets/styles/UsualButton"
import { BASE_URL } from "../../assets/constants";
import React from "react";
import axios from "axios";

export default function InitialScreen() {

    const [formValue, setFormValue] = React.useState({
        "email": "",
        "password": ""
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
    
    function login(event) {
        event.preventDefault();
        const promise = axios.post("//localhost:5000/sign-in", formValue);
        promise.then(response => {
            navigate("/wallet")    
        })
        .catch(e => alert(e.response.data))
    }      

    return (
        <StyledInitialScreen>
            <h1>MyWallet</h1>
            <form onSubmit={login}>
                <input onChange={handleChange} value={formValue.email} type="email" name="email" placeholder="Email" required></input>
                <input onChange={handleChange} value={formValue.password} type="password" name="password" placeholder="Senha" required></input>
                <UsualButton type="submit">Entrar</UsualButton>
            </form>
            <Link to="/sign-in">Primeira vez? Cadastre-se!</Link>
        </StyledInitialScreen>
    )
}