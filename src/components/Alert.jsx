import { Alert as AlertB} from "react-bootstrap";
import StyledWrapper from "../styled/Alert/StyledWrapper";

const Alert = (props) => (
  <StyledWrapper>
    <AlertB variant="warning">{props.text}</AlertB>
  </StyledWrapper>
);

export default Alert;
