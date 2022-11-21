import styled from "styled-components";
import { BUTTON_BACKGROUND_COLOR, BUTTON_COLOR } from "../constants";

const UsualButton = styled.button`
    background: ${BUTTON_BACKGROUND_COLOR};
    color: ${BUTTON_COLOR};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px;
    font-family: 'Raleway';
`

export default UsualButton;