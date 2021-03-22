import { Alert } from "react-bootstrap";
import styled from 'styled-components'

const StyledAlert = styled(alert)`
    position : absolute;
    top: 50%;
    left: 50%;
    border : 1px solid red;
    z-index : 20;
`
export default StyledAlert;