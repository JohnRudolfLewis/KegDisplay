import React from 'react';
import numeral from 'numeral';
import SrmWidget from './SrmWidget';
import IbuWidget from './IbuWidget';
import KegWidget from './KegWidget';
import AbvWidget from './AbvWidget';
import OgWidget from './OgWidget';
import FgWidget from './FgWidget';
import BalanceWidget from './BalanceWidget';
import CaloriesWidget from './CaloriesWidget';
import KegWidget from './QuantityWidget';

class TapWidget extends React.Component {
	render() {
		var keg = this.props.keg;
		if (keg) {
			return (
				<td className="srm">
					<SrmWidget srm={keg.srm} />
					<p>{numeral(keg.srm).format('0.0')} SRM</p>
				</td>
				<td className="ibu">
					<IbuWidget ibu={keg.ibu} />
					<p>{numeral(keg.ibu).format('0')} IBU</p>
				</td>
				<td>
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
				<td className="abv">
					<AbvWidget abv={keg.abv} />
					<p>{numeral(keg.abv).format('0.0%')} ABV</p>
				</td>
				<td className="keg">
					<QuantityWidget quantityInitial={keg.quantityInitial} 
						quantityRemaining={keg.quantityRemaining} />
					<p>{numeral(keg.quantityRemaining).format(0)} fl oz remaining</p>					
				</td>
			);
		} else {
			return null;
		}
	}
}

export default TapWidget;