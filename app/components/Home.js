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
    var rowStyle = 'odd';
  	var tapRows = this.state.taps.map(function(tap) {
  		rowStyle = (rowStyle == 'odd') ? 'even' : 'odd';
      //alert(rowStyle);
      return (
        <tbody key={"small-" + tap._id} className={rowStyle}>
          <tr className="hidden-sm hidden-xs visible-md visible-lg">
            <td colSpan="1" className="tap">
              <div className="tapcircle">{tap.kegerator} {tap.handle}</div>
            </td>
            <td colSpan="1" className="srm">
              <SrmWidget srm={tap.keg ? tap.keg.srm : 0.0} />
            </td>
            <td colSpan="1" className="ibu">
              <IbuWidget ibu={tap.keg ? tap.keg.ibu : 0} />
            </td>
            <td colSpan="4">
              <NotesWidget keg={tap.keg} />
            </td>
            <td colSpan="1" className="abv">
              <AbvWidget abv={tap.keg ? tap.keg.abv : 0} />
            </td>
            <td colSpan="1" className="qty">
              <QuantityWidget keg={tap.keg} /> 
            </td>
          </tr>
        </tbody>
  		);
  	});

    var tapRowsSmall = this.state.taps.map(function(tap) {
      return (
        <tbody key={"small-" + tap._id}>
          <tr>
            <td colSpan="8">
              <div className="tapcircle">{tap.kegerator} {tap.handle}</div>
            </td>
          </tr>
          
          <tr>
            <td colSpan="8">
              <NotesWidget keg={tap.keg} />
            </td>
          </tr>

          <tr>
            <td colSpan="2" className="srm">
              <SrmWidget srm={tap.keg ? tap.keg.srm : 0.0} />
            </td>
            <td colSpan="2" className="ibu">
              <IbuWidget ibu={tap.keg ? tap.keg.ibu : 0} />
            </td>
            <td colSpan="2" className="abv">
              <AbvWidget abv={tap.keg ? tap.keg.abv : 0} />
            </td>
            <td colSpan="2" className="qty">
              <QuantityWidget keg={tap.keg} /> 
            </td>
          </tr>

        </tbody>
      );
    });

    return (
      <div>
        <table className="table no-border hidden-sm hidden-xs visible-md visible-lg">
          {tapRows}
        </table>

        <table className="table no-border visible-sm visible-xs hidden-md hidden-lg">
          {tapRowsSmall}
        </table>
      </div>
    );
  }
}

export default Home;