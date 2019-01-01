// Modules
import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

// Screens
import AlbumsListScreen from './screens/AlbumsListScreen';
import CreateAlbumScreen from './screens/CreateAlbumScreen';

const App = () => (
  <Switch>
    <Route exact path="/" component={AlbumsListScreen} />
    <Route exact path="/create" component={CreateAlbumScreen} />
  </Switch>
);

App.propTypes = {
};

export default withRouter(connect(
  () => ({
  }), {},
)(App));
