// LogInLayout.js
import React from 'react';
import Layout from './Layout';

const LogInLayout = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

// Override the rendering of the footer
LogInLayout.Footer = () => null;

export default LogInLayout;