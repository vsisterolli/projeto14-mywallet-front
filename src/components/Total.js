import React from "react"
import styled from "styled-components";

export default function Total({registers}) {
    
    const [sum, setSum] = React.useState(0);

    React.useEffect(() => {
        let totalSum = 0;
        registers.forEach(element => {
            totalSum += Number(element.value);
        });
        setSum(totalSum);
    }, [registers])

    return(
        <StyledTotal sum={sum}>
            <h2><span className="saldo">SALDO</span><span className="soma">{sum.toFixed(2)}</span></h2>
        </StyledTotal>
    )

}

const StyledTotal = styled.div`
    display: flex;
    align-items: center;
    padding-left: 30px;
    border-radius: 5px;
    width: 80vw;
    max-width: 800px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    overflow: auto;
    position: relative;
    height: 60px;
    background-color: white;
    .saldo {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }
    .soma {
        position: absolute;
        right: 30px;
        color: ${props => props.sum >= 0 ? "#03AC00" : "#C70000"};
    }
`

