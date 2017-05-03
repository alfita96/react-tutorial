import React, {Component} from 'react';
import ClusterCard from './ClusterCard';

class ClusterList extends Component {

  render() {
    return (
      <ClusterCard
        title="DEV"
        subtitle="http://elk-dev-01.swissre.com:9200"
        state="Green"
        kibanaAction="Kibana"
      />
    );
  }
}

export default ClusterList;
