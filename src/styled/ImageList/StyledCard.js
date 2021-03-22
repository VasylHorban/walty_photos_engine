import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
height : 17rem;
@media (min-width: 992px ) {
    height : 15rem;
}
@media (min-width: 1200px) {
    height : 18rem;
}
  img{
      height : 100%;
      width : 100%;
  }
  
`;

export default StyledCard;
