import React from 'react';
import { Alert as AlertB } from 'react-bootstrap';

import { AlertWrapper } from '../styled';

const Alert = ({ text }) => (
  <AlertWrapper>
    <AlertB variant="warning">{text}</AlertB>
  </AlertWrapper>
);

export default Alert;
