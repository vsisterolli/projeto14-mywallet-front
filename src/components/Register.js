import axios from "axios";
import dayjs from "dayjs";
import styled from "styled-components";
import React from "react";
import { BASE_URL } from "../assets/constants";
import { useNavigate } from "react-router";

export default function Register({data, user, setNeedUpdate, total}) {

    const navigate = useNavigate();

    function deleteRegister() {
        if(!window.confirm("Realmente deseja deletar esse registro?"))
            return;
        const headers = {
            headers: {
                "authorization": "Bearer " + user.sessionId
            }
        }
        axios.delete(BASE_URL + `/register/${data.id}`, headers)
        .then(() => setNeedUpdate(data.id))
        .catch(() => {
            localStorage.setItem("userData", null);
            navigate("/")
        })
    }
    
    function handleEdit() {
        const dataString = JSON.stringify(data);
        navigate(`/add/${data.value >= 0 ? "input" : "output"}?data=` + dataString) 
    }


    const messagesEndRef = React.useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView()
    }
    
    React.useEffect(() => {
        if(data.id === total)
            scrollToBottom()
    }, []);

    const day = dayjs(data.date).format("DD/MM/YYYY")
    return (
        <StyledRegister onClick={handleEdit} ref={messagesEndRef} value={data.value}><span className="date">{day}</span> 
            <span className="description">{data.description}</span>
            <span className="value">{Math.abs(data.value).toFixed(2)}</span>
            <ion-icon onClick={deleteRegister} name="close-outline"></ion-icon>
        </StyledRegister>
    )
}

const StyledRegister = styled.h2`
    font-weight: 400;
    font-size: 16px;
    position: relative;
    line-height: 19px;
    margin-bottom: 24px;
    font-family: 'Raleway';
    .date {
        color: #C6C6C6;
        margin: 30px;
    }
    .value {
        color: ${props => props.value >= 0 ? "#03AC00" : "#C70000"};
        margin-left: 10px;
        position: absolute;
        right: 60px;
    }
    ion-icon {
        position: absolute;
        right: 30px;
        top: 1.5px;
        color: #c6c6c6;
    }

`