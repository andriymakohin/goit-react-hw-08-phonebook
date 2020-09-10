import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import ThemeContext from '../context/ThemeContext';
import Layout from './Layout/Layout';
import routes from '../routes';
import Spinner from './Spinner/Spinner';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import '../index.css';

const App = () => {
  return (
    <ThemeContext>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                    <PublicRoute key={route.label} {...route} />
                  ),
              )}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeContext>
  )
}

export default App;