import React, {Component} from 'react';
import ClusterList from './components/ClusterList';
import './Main.css';

class Main extends Component {

  render() {
    return (
      <div className="main-container">
        <ClusterList />
      </div>
    );
  }
}

export default Main
