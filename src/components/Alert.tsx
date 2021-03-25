import React from 'react';
import { Alert as AlertB } from 'react-bootstrap';

import { AlertWrapper } from '../styled';

type Props = {
  text : string
}
const Alert : React.FC<Props> = ({ text }) => (
  <AlertWrapper>
    <AlertB variant="warning">{text}</AlertB>
  </AlertWrapper>
);

export default Alert;
