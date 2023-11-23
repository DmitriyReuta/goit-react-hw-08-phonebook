import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};