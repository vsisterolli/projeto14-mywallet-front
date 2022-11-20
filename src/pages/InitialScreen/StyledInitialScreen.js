import UsualScreen from "../../assets/styles/UsualScreen";
import styled from "styled-components";

const StyledInitialScreen = styled(UsualScreen)`
    justify-content: center;
    input {
        margin-bottom: 13px;
        display: block;
    }
    button {
        width: 326px;
        height: 46px;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
    }
    a {
        margin-top:36px;
        font-family: 'Raleway';
        color: white;
        text-decoration: none;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
    }
`

export default StyledInitialScreen;