import axios from "axios";
import { useContext } from "react"
import { useNavigate } from "react-router";
import React from "react";
import { userContext } from "../../App"
import { BASE_URL } from "../../assets/constants";
import { StyledWallet, StyledMain } from "./StyledWallet";
import UsualButton from "../../assets/styles/UsualButton";
import Register from "../../components/Register";
import { Oval } from "react-loader-spinner";
import Total from "../../components/Total";

export default function Wallet() {


    const user = useContext(userContext)[0];
    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(false)
    const [registers, setRegisters] = React.useState([])
    const [needUpdate, setNeedUpdate] = React.useState(0);

    const headers = {
        headers: {
            Authorization: "Bearer " + user?.sessionId
        }
    };

    function signOut() {
        axios.post(BASE_URL + "/sign-out",{}, headers)
        .then(() => {
            localStorage.setItem("userData", null);
            navigate("/")
        })
        .catch(e => console.log(e))
    }
 

    React.useEffect(() => {
        const promise = axios.get(BASE_URL + "/register", headers);
        setLoading(true)
        promise.then(response => {
            setRegisters(response.data)
            setLoading(false)
        })
        promise.catch(() => {
            setLoading(false)
            localStorage.setItem("userData", null);
            navigate("/")
        });
    }, [needUpdate])


    return(
        <StyledWallet>
            <div className="container">
                <h2>Olá, Fulano</h2>
                <ion-icon onClick={signOut} name="exit-outline"></ion-icon>
            </div>
            <StyledMain registerLength={registers.length}>
                <h3>{loading ? <Oval secondaryColor="white" color="#8C11BE"/> : "Não há registros de\nentrada ou saída"}</h3>
                {registers.map((value, index) => <Register total={registers.length-1} setNeedUpdate={setNeedUpdate} data={value} user={user} key={index}/>)}
            </StyledMain>
            <Total registers={registers}/>
            <div className="container">
                <UsualButton onClick={() => navigate("/add/input")}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <h3>Nova<br/>Entrada</h3>
                </UsualButton>
                <UsualButton onClick={() => navigate("/add/output")} className="remove">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <h3>Nova<br/>Saída</h3>
                </UsualButton>
            </div>
        </StyledWallet>
    )

}