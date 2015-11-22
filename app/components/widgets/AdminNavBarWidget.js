import React from 'react';
import {Link} from 'react-router';

class AdminNavBarWidget extends React.Component {
	render() {
		var tapsClassName = this.props.activeNav == "taps" ? "active" : "";
		var kegsClassName = this.props.activeNav == "kegs" ? "active" : "";

		return (
			<nav className="navbar navbar-default">
		        <div className="container-fluid">
		          <div className="navbar-header">
		            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		              <span className="sr-only">Toggle navigation</span>
		              <span className="icon-bar"></span>
		              <span className="icon-bar"></span>
		              <span className="icon-bar"></span>
		            </button>
		          </div>
		          <div id="navbar" className="navbar-collapse collapse">
		            <ul className="nav navbar-nav">
		              <li className={tapsClassName}><a href="/Admin/Taps">Taps</a></li>
		              <li className={kegsClassName}><a href="/Admin/Kegs">Kegs</a></li>
		            </ul>
		            <ul className="nav navbar-nav navbar-right">
		              <li><Link to={`/`}>Exit</Link></li>
		            </ul>
		          </div>
		        </div>
		      </nav>
		);
	}
}

export default AdminNavBarWidget;