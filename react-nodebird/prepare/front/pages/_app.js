import React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import "antd/dist/antd.css";
React.useLayoutEffect = React.useEffect;

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default App;