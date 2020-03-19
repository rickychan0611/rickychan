import React, { Fragment, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import AppDev from '../pages/AppDev'
import Mag from '../pages/Mag'
import Ads from '../pages/Ads'
// import Items from '../pages/Items';
// import Share from '../pages/Share';
// import Profile from '../pages/Profile';


export default () => {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/app-dev"  component={AppDev} />
        <Route path="/magazine"  component={Mag} />
        <Route path="/ads"  component={Ads} />
        <Route path="*"  component={Home} />
      </Switch>
      )
    }
