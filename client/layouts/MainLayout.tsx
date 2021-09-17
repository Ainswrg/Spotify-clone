import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = ({ children, ...props }) => {
  return (
    <>
      <Navbar />
      <Container className="center">
        {children}
      </Container>
      <style >
        {`
          .center {
            margin-top: 90px;
          }
        `}
      </style>
    </>
  );
};

export default MainLayout;
