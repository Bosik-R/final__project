import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { store } from './redux/store';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import ProductViewContainer  from './components/views/ProductView/ProductView';
import { Cart } from './components/features/Cart/Cart';
import { NotFound } from './components/views/NotFound/NotFound';
import { Order } from './components/views/Order/Order';

import './styles/bootstrap.scss';
import './styles/global.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline />
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/products/:id' component={ProductViewContainer} />
          <Route path='/cart' component={Cart} />
          <Route path='/orderView' component={Order} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
