import React from 'react';

class NoMatch extends React.Component {
	render() {
		return (
  		<div>
    		<h3>No match for <code>{location.pathname}</code></h3>
  		</div>
  	);
	}
}

export default NoMatch