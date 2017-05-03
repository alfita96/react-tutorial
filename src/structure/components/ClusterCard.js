import React, {Component} from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DEV from '../pictures/DEV.jpg';

class ClusterCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}
          avatar={DEV}
        />
        <CardText>
          Status: {this.props.state}
        </CardText>
        <CardActions>
          <FlatButton label={this.props.kibanaAction} /> 
        </CardActions>
      </Card>
    );
  }
}

export default ClusterCard;
