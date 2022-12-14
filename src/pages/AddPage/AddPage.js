import { useParams } from "react-router"
import StyledAddPage from "./StyledAddPage";
import UsualButton from "../../assets/styles/UsualButton"
import { useContext } from "react";
import { userContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../assets/constants";
import { ThreeDots } from "react-loader-spinner";

export default function AddPage() {
    
    const { type } = useParams();
    const user = useContext(userContext)[0];
    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const data = JSON.parse(searchParams.get("data"))

    const [formValue, setFormValue] = React.useState({
        "value": (data ? Math.abs(data.value) : ""),
        "description": (data ? data.description : "")
    })


    function handleChange(e) {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    function saveRegister(event) {
        event.preventDefault();
        const registerValue = {
            ...formValue,
            "value": type === "input" ? formValue.value : -formValue.value
        }
        const headers = {
            headers: {
                "authorization": "Bearer " + user.sessionId
            }
        }

        if(data) {
            // if data exist, it means that we are editing an existent register
            setLoading(true)
            const promise = axios.put(BASE_URL + "/register", {...registerValue, "id": data.id}, headers)
            promise.then((response) => {
                navigate("/wallet")
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
                localStorage.setItem("userData", null);
                navigate("/")
            });
        }

        else {
            // if it doesn't exist, we are creating a new one
            setLoading(true)
            const promise = axios.post(BASE_URL + "/register", registerValue, headers)
            promise.then(() => {
                navigate("/wallet")
                setLoading(false)
            })
            .catch(() => {
                localStorage.setItem("userData", null);
                navigate("/")
            });
        }
    }

    return(
        <StyledAddPage>
            <div className="header">
                <h2>{data ? "Alterar" : "Adicionar"} {type === "input" ? "entrada" : "sa??da"}</h2>
            </div>
            <form onSubmit={saveRegister}>
                <input type="number" value={formValue.value} onChange={handleChange} name="value" placeholder="Valor" min={0} required/>
                <input type="text" value={formValue.description} onChange={handleChange} name="description" placeholder="Descricao" required/>
                <UsualButton type="submit">{loading ? <ThreeDots color="white"/> : `Salvar ${type === "input" ? "entrada" : "sa??da"}`}</UsualButton>
            </form>
        </StyledAddPage>
    )
}