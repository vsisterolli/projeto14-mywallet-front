import StyledInitialScreen from "./StyledInitialScreen"
import { Link, useNavigate } from "react-router-dom"
import UsualButton from "../../assets/styles/UsualButton"
import React, { useContext } from "react";
import { userContext } from "../../App";
import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import { ThreeDots } from "react-loader-spinner";

export default function InitialScreen() {

    const [loading, setLoading] = React.useState(false);
    
    const [formValue, setFormValue] = React.useState({
        "email": "",
        "password": ""
    })

    const navigate = useNavigate()
    const [user, setUser] = useContext(userContext);

    function handleChange(e) {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
    
    React.useEffect(() => {
        if(localStorage.getItem("userData") && localStorage.getItem("userData") !== "null") {
            setUser(JSON.parse(localStorage.getItem("userData")))
            navigate("/wallet")
        }
    }, [])

    function login(event) {
        event.preventDefault();
        setLoading(true);
        const promise = axios.post(BASE_URL + "/sign-in", formValue);
        promise.then(response => {
            setLoading(false)
            localStorage.setItem("userData", JSON.stringify(response.data))
            setUser(response.data)
            navigate("/wallet")    
        })
        .catch(e => {
            alert(e.response.data)
            setLoading(false);
        })
    }      

    return (
        <StyledInitialScreen>
            <h1>MyWallet</h1>
            <form onSubmit={login}>
                <input onChange={handleChange} value={formValue.email} type="email" name="email" placeholder="Email" required></input>
                <input onChange={handleChange} value={formValue.password} type="password" name="password" placeholder="Senha" required></input>
                <UsualButton type="submit" disabled={loading}>{loading ?  <ThreeDots color="white"/> : "Entrar"}</UsualButton>
            </form>
            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </StyledInitialScreen>
    )
}