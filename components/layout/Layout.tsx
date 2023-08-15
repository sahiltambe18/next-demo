import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import React from 'react';

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;
