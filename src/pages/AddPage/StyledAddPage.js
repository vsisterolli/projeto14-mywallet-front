import UsualScreen from "../../assets/styles/UsualScreen"
import styled from "styled-components"

const StyledAddPage = styled(UsualScreen)`
    .header {
        width: 80vw;
        max-width: 326px;
        margin-top:25px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color:white;
        margin-bottom: 40px;
    }
    input {
        margin-bottom: 13px;
        display: block;
    }
    button {
        width: 326px;
        height: 46px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 0px !important;
        padding: 0px !important;
        svg {
            margin: 0 auto;
        }
    }
`

export default StyledAddPage;