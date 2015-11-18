import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';

import numeral from 'numeral';
import SrmWidget from './widgets/SrmWidget';
import IbuWidget from './widgets/IbuWidget';
import AbvWidget from './widgets/AbvWidget';
import NotesWidget from './widgets/NotesWidget';
import QuantityWidget from './widgets/QuantityWidget';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = HomeStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		HomeStore.listen(this.onChange);
		HomeActions.getTaps();

    // get new tap data on sockets refresh command
    let socket = io.connect(); 
    socket.on('refresh', (data) => {
      HomeActions.getTaps();
    });
    // also get new tap data every 60 seconds in case the socket dies
    setInterval(HomeActions.getTaps, 60000);
	}

	componetWillUnmount() {
		HomeStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

  render() {
  	var tapRows = this.state.taps.map(function(tap) {
  		return (
  			<tr key={tap.id} className="tap-row">
  				
          <td className="tap">
  					<div className="tapcircle">{tap.kegerator} {tap.handle}</div>
				  </td>

  				<SrmWidget keg={tap.keg} />
  				<IbuWidget keg={tap.keg} />
  				<NotesWidget keg={tap.keg} />
  				<AbvWidget keg={tap.keg} />
  				<QuantityWidget keg={tap.keg} />	
  			</tr>
  		);
  	});

    return (
      <div>
      <table className="table taps table-striped">
      	<thead>
      		<tr>
      		<th>Building / Tap</th>
      		<th>Color</th>
      		<th>Bitterness</th>
      		<th>Brewery Name : Beer Name / Style / Notes</th>
      		<th>Alcohol</th>
      		<th>Quantity</th>
      		</tr>
      	</thead>
      	<tbody>
      	{tapRows}
      	</tbody>
      </table>

      </div>
    );
  }
}

export default Home;