import UsualScreen from "../../assets/styles/UsualScreen";
import styled from "styled-components";

const StyledWallet = styled(UsualScreen)`
    .container {
        width: 80vw;
        max-width: 800px;
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        
        h2, ion-icon {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 26px;
            line-height: 31px;
            color: white;
        }

        button {
            width: 155px;
            height: 114px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            position: relative;
            ion-icon {
                position: absolute;
                top: 11px;
                left: 10px;
            }
            h3 {
                text-align: left;
                position: absolute;
                bottom: 9px;
                left: 10px;
            }
            margin-bottom: 16px;
        }
        .remove {
            margin-left: 15px;
        }

        @media (min-width: 800px) {
            h2, ion-icon {
                font-size: 36px;
            }
            button {
                width: 250px;
            }
        }

    }

`

const StyledMain = styled.main`
    
    background-color: white;
    height: 70vh;
    width: 80vw;
    overflow: auto;
    margin-top: 22px;
    border-radius: 5px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    padding-top: 23px;
    max-width: 800px;
    position: relative;
        
    display: ${props => props.registerLength === 0 ? "flex" : "initial"};;
    justify-content: ${props => props.registerLength === 0 ? "center" : "flex-start"};
    align-items: ${props => props.registerLength === 0 ? "center" : "flex-start"};

    h3 {
        display: ${props => props.registerLength !== 0 ? "none" : "initial"};
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #868686;
    }

    h4 {
        color: black;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
    }
    

`

export {StyledMain, StyledWallet};