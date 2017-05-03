import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import './Navbar.css';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    return(
      <div>
        <AppBar
          title="ELK Status"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={this.toggleDrawer}
        >
          <AppBar title="Menu"
            onLeftIconButtonTouchTap={this.toggleDrawer}
          />
          <MenuItem primaryText="Home" containerElement={<Link to="/" />} onTouchTap={this.toggleDrawer} style={{ textAlign: 'center' }}/>
          <MenuItem primaryText="Gallery" containerElement={<Link to="/gallery" />} onTouchTap={this.toggleDrawer} style={{ textAlign: 'center' }}/>
          <MenuItem primaryText="Location" containerElement={<Link to="/location" />} onTouchTap={this.toggleDrawer} style={{ textAlign: 'center' }}/>
          <MenuItem primaryText="About" containerElement={<Link to="/about" />} onTouchTap={this.toggleDrawer} style={{ textAlign: 'center' }}/>
        </Drawer>
      </div>
    );
  }
}

export default Navbar
