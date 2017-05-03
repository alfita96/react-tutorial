import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Navbar from './structure/Navbar';
import Main from './structure/Main';
import Gallery from './structure/Gallery';
import Location from './structure/Location';
import About from './structure/About';
import NoMatch from './NoMatch';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/location" component={Location}/>
                <Route path="/about" component={About}/>
                <Route component={NoMatch}/>
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
