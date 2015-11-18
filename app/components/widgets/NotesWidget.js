import React from 'react';
import numeral from 'numeral';
import OgWidget from './OgWidget';
import FgWidget from './FgWidget';
import BalanceWidget from './BalanceWidget';
import CaloriesWidget from './CaloriesWidget';

class NotesWidget extends React.Component {
	render() {
		var keg = this.props.keg;
		
		if (keg && keg.name) {
			return (
				<td className="notes">
					<h1>{keg.brewery} : {keg.name}</h1>
					<h2 className="style">{keg.style}</h2>
					<p className="notes">{keg.notes}</p>
					<ul className="list-inline extra-info">
						<OgWidget og={keg.og} />
						<FgWidget fg={keg.fg} />
						<BalanceWidget balance={keg.balance} />
						<CaloriesWidget calories={keg.calories} />
					</ul>
				</td>
				);
		} else {
			return (<td className="notes-empty"><h2>Empty</h2></td>);
		}
	}
}

export default NotesWidget;