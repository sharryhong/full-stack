import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <>
      <div>
        <Link href="/"><a>Nodebird</a></Link>
        <Link href="/profile"><a>Profile</a></Link>
        <Link href="/signup"><a>Signup</a></Link>
      </div>
      <div>{ children }</div>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout;