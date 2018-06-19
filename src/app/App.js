import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css'
import './App.css';

import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Feed } from './partials/Feed';
import { PostContent } from './partials/PostContent';
import { Profile } from './pages/userProfile/Profile';


class App extends Component {


  componentDidMount() {
    M.AutoInit()
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path='/post/:type/:id' component={PostContent} />
          <Route path='/profile' component={Profile}/>
          <Route path='/' component={Feed} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
