import React, { Fragment, useState } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import Home from '../pages/Home'
import AppDev from '../pages/AppDev'
import Mag from '../pages/Mag'
import Ads from '../pages/Ads'
import Menu from '../pages/Menu'
import Contact from '../pages/Contact'

export default () => {
    return (
      <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/app-dev"  component={AppDev} />
        <Route path="/magazine"  component={Mag} />
        <Route path="/ads"  component={Ads} />
        <Route path="/menu"  component={Menu} />
        <Route path="/contact"  component={Contact} />
        <Route path="*"  component={Home} />
      </Switch>
      </div>
      )
    }
