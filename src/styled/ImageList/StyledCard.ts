import { Card } from 'react-bootstrap';
import styled from 'styled-components';

import { screenResolution } from '../globalVariables';

const StyledCard = styled(Card)`
  height: 18rem;

  @media (min-width: ${screenResolution.md}) {
    height: 15rem;
  }
  @media (min-width: ${screenResolution.lg}) {
    height: 16rem;
  }
  @media (min-width: ${screenResolution.xl}) {
    height: 17rem;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;

export default StyledCard;
