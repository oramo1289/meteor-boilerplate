import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

/*=====Define witch pages server what purposes*/
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];
/*===========Make Private Routes==========*/
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/dashboard');//if is login you will be push to to /links
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');//si no te has logeado no tienes acceso a /links y seras reenviado a /signup
  }
};

export const onAuthChange= (isAuthenticated)=>{
  const pathname = browserHistory.getCurrentLocation().pathname;//saber en que página está el usuario que se conectó
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');//replace es como push pero este me deja volver atrás, no me obliga a quedarme en una sola pestaña
  }
};

//window.browserHistory = browserHistory;
export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
