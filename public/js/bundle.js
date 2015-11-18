(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = (function () {
	function HomeActions() {
		_classCallCheck(this, HomeActions);

		this.generateActions('getTapsSuccess', 'getTapsFail');
	}

	_createClass(HomeActions, [{
		key: 'getTaps',
		value: function getTaps() {
			var _this = this;

			$.ajax({ url: '/api/taps' }).done(function (data) {
				_this.actions.getTapsSuccess(data);
			}).fail(function (jqXhr) {
				_this.actions.getTapsFail(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText); //jqXhr.responseJSON.message)
			});
		}
	}]);

	return HomeActions;
})();

exports.default = _alt2.default.createActions(HomeActions);

},{"../alt":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
})(_react2.default.Component);

exports.default = App;

},{"./Footer":4,"./Header":5,"react":"react"}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = (function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'p',
            null,
            'Alcohol Policy: Maximum 2 drinks. 21 years and older only. Drink Responsibily.'
          )
        )
      );
    }
  }]);

  return Footer;
})(_react2.default.Component);

exports.default = Footer;

},{"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'headerCenter' },
            _react2.default.createElement(
              'h1',
              null,
              'WHAT\'S ON TAP IN KIRKLAND?'
            )
          )
        )
      );
    }
  }]);

  return Header;
})(_react2.default.Component);

exports.default = Header;

},{"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HomeStore = require('../stores/HomeStore');

var _HomeStore2 = _interopRequireDefault(_HomeStore);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _SrmWidget = require('./widgets/SrmWidget');

var _SrmWidget2 = _interopRequireDefault(_SrmWidget);

var _IbuWidget = require('./widgets/IbuWidget');

var _IbuWidget2 = _interopRequireDefault(_IbuWidget);

var _AbvWidget = require('./widgets/AbvWidget');

var _AbvWidget2 = _interopRequireDefault(_AbvWidget);

var _NotesWidget = require('./widgets/NotesWidget');

var _NotesWidget2 = _interopRequireDefault(_NotesWidget);

var _QuantityWidget = require('./widgets/QuantityWidget');

var _QuantityWidget2 = _interopRequireDefault(_QuantityWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

    _this.state = _HomeStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _HomeStore2.default.listen(this.onChange);
      _HomeActions2.default.getTaps();

      // get new tap data on sockets refresh command
      var socket = io.connect();
      socket.on('refresh', function (data) {
        _HomeActions2.default.getTaps();
      });
      // also get new tap data every 60 seconds in case the socket dies
      setInterval(_HomeActions2.default.getTaps, 60000);
    }
  }, {
    key: 'componetWillUnmount',
    value: function componetWillUnmount() {
      _HomeStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      var tapRows = this.state.taps.map(function (tap) {
        return _react2.default.createElement(
          'tr',
          { key: tap.id, className: 'tap-row' },
          _react2.default.createElement(
            'td',
            { className: 'tap' },
            _react2.default.createElement(
              'div',
              { className: 'tapcircle' },
              tap.kegerator,
              ' ',
              tap.handle
            )
          ),
          _react2.default.createElement(_SrmWidget2.default, { keg: tap.keg }),
          _react2.default.createElement(_IbuWidget2.default, { keg: tap.keg }),
          _react2.default.createElement(_NotesWidget2.default, { keg: tap.keg }),
          _react2.default.createElement(_AbvWidget2.default, { keg: tap.keg }),
          _react2.default.createElement(_QuantityWidget2.default, { keg: tap.keg })
        );
      });

      var tapDivs = this.state.taps.map(function (tap) {
        return _react2.default.createElement(
          'div',
          { className: 'row', key: tap.id },
          _react2.default.createElement(
            'div',
            { className: 'col-md-1 tap' },
            _react2.default.createElement(
              'div',
              { className: 'tapcircle' },
              tap.kegerator,
              ' ',
              tap.handle
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-1' },
            '.col-md-1'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-1' },
            '.col-md-1'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-7' },
            '.col-md-7'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-1' },
            '.col-md-1'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-1' },
            '.col-md-1'
          )
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'table',
          { className: 'table taps table-striped' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Building / Tap'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Color'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Bitterness'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Brewery Name : Beer Name / Style / Notes'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Alcohol'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Quantity'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            tapRows
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          tapDivs
        )
      );
    }
  }]);

  return Home;
})(_react2.default.Component);

exports.default = Home;

},{"../actions/HomeActions":1,"../stores/HomeStore":18,"./widgets/AbvWidget":7,"./widgets/IbuWidget":11,"./widgets/NotesWidget":12,"./widgets/QuantityWidget":14,"./widgets/SrmWidget":15,"numeral":38,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbvWidget = (function (_React$Component) {
	_inherits(AbvWidget, _React$Component);

	function AbvWidget() {
		_classCallCheck(this, AbvWidget);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AbvWidget).apply(this, arguments));
	}

	_createClass(AbvWidget, [{
		key: 'render',
		value: function render() {
			var keg = this.props.keg;
			var abv = keg.abv || 0;

			var cups = [];
			var offTheChart = false;
			var remaining = abv * 100 * 20;

			var level = remaining;
			if (level > 100) level = 100;
			var style = { height: level + "%" };
			cups.push(_react2.default.createElement(
				'div',
				{ key: '0', className: 'abv-indicator' },
				_react2.default.createElement('div', { className: 'abv-full', style: style })
			));
			remaining -= level;

			if (remaining > 0) {
				level = remaining;
				if (level > 100) level = 100;
				var style = { height: level + "%" };
				cups.push(_react2.default.createElement(
					'div',
					{ key: '1', className: 'abv-indicator' },
					_react2.default.createElement('div', { className: 'abv-full', style: style })
				));
				remaining -= level;
			}

			if (remaining > 0) {
				cups.push(_react2.default.createElement('div', { key: '2', className: 'abv-offthechart' }));
			}

			if (keg && keg.abv) {
				return _react2.default.createElement(
					'td',
					{ className: 'abv' },
					_react2.default.createElement(
						'div',
						{ className: 'abv-container' },
						cups
					),
					_react2.default.createElement(
						'p',
						null,
						(0, _numeral2.default)(keg.abv).format('0.0%'),
						' ABV'
					)
				);
			} else {
				return _react2.default.createElement('td', null);
			}
		}
	}]);

	return AbvWidget;
})(_react2.default.Component);

exports.default = AbvWidget;

},{"numeral":38,"react":"react"}],8:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BalanceWidget = (function (_React$Component) {
	_inherits(BalanceWidget, _React$Component);

	function BalanceWidget() {
		_classCallCheck(this, BalanceWidget);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(BalanceWidget).apply(this, arguments));
	}

	_createClass(BalanceWidget, [{
		key: 'render',
		value: function render() {
			var balance = this.props.balance;
			if (balance && balance > 0) {
				return _react2.default.createElement(
					'li',
					null,
					'Bitterness Ratio : ',
					(0, _numeral2.default)(balance).format('0.0')
				);
			} else {
				return null;
			}
		}
	}]);

	return BalanceWidget;
})(_react2.default.Component);

exports.default = BalanceWidget;

},{"numeral":38,"react":"react"}],9:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CaloriesWidget = (function (_React$Component) {
	_inherits(CaloriesWidget, _React$Component);

	function CaloriesWidget() {
		_classCallCheck(this, CaloriesWidget);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CaloriesWidget).apply(this, arguments));
	}

	_createClass(CaloriesWidget, [{
		key: 'render',
		value: function render() {
			var calories = this.props.calories;
			if (calories && calories > 0) {
				return _react2.default.createElement(
					'li',
					null,
					'Calories : ',
					(0, _numeral2.default)(calories).format('0')
				);
			} else {
				return null;
			}
		}
	}]);

	return CaloriesWidget;
})(_react2.default.Component);

exports.default = CaloriesWidget;

},{"numeral":38,"react":"react"}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FgWidget = (function (_React$Component) {
	_inherits(FgWidget, _React$Component);

	function FgWidget() {
		_classCallCheck(this, FgWidget);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(FgWidget).apply(this, arguments));
	}

	_createClass(FgWidget, [{
		key: 'render',
		value: function render() {
			var fg = this.props.fg;
			if (fg && fg > 0) {
				return _react2.default.createElement(
					'li',
					null,
					'FG : ',
					(0, _numeral2.default)(fg).format('0.000')
				);
			} else {
				return null;
			}
		}
	}]);

	return FgWidget;
})(_react2.default.Component);

exports.default = FgWidget;

},{"numeral":38,"react":"react"}],11:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IbuWidget = (function (_React$Component) {
	_inherits(IbuWidget, _React$Component);

	function IbuWidget() {
		_classCallCheck(this, IbuWidget);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IbuWidget).apply(this, arguments));
	}

	_createClass(IbuWidget, [{
		key: 'render',
		value: function render() {
			var keg = this.props.keg;
			var ibu = keg.ibu || 0;

			if (ibu > 100) ibu = 100;
			if (ibu < 0) ibu = 0;

			var ibuFullStyle = {
				height: ibu + "%"
			};

			if (keg && keg.ibu) {
				return _react2.default.createElement(
					'td',
					{ className: 'ibu' },
					_react2.default.createElement(
						'div',
						{ className: 'ibu-container' },
						_react2.default.createElement(
							'div',
							{ className: 'ibu-indicator' },
							_react2.default.createElement('div', { className: 'ibu-full', style: ibuFullStyle })
						)
					),
					_react2.default.createElement(
						'p',
						null,
						(0, _numeral2.default)(keg.ibu).format('0'),
						' IBU'
					)
				);
			} else {
				return _react2.default.createElement('td', null);
			}
		}
	}]);

	return IbuWidget;
})(_react2.default.Component);

exports.default = IbuWidget;

},{"numeral":38,"react":"react"}],12:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _OgWidget = require('./OgWidget');

var _OgWidget2 = _interopRequireDefault(_OgWidget);

var _FgWidget = require('./FgWidget');

var _FgWidget2 = _interopRequireDefault(_FgWidget);

var _BalanceWidget = require('./BalanceWidget');

var _BalanceWidget2 = _interopRequireDefault(_BalanceWidget);

var _CaloriesWidget = require('./CaloriesWidget');

var _CaloriesWidget2 = _interopRequireDefault(_CaloriesWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotesWidget = (function (_React$Component) {
	_inherits(NotesWidget, _React$Component);

	function NotesWidget() {
		_classCallCheck(this, NotesWidget);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(NotesWidget).apply(this, arguments));
	}

	_createClass(NotesWidget, [{
		key: 'render',
		value: function render() {
			var keg = this.props.keg;

			if (keg && keg.name) {
				return _react2.default.createElement(
					'td',
					{ className: 'notes' },
					_react2.default.createElement(
						'h1',
						null,
						keg.brewery,
						' : ',
						keg.name
					),
					_react2.default.createElement(
						'h2',
						{ className: 'style' },
						keg.style
					),
					_react2.default.createElement(
						'p',
						{ className: 'notes' },
						keg.notes
					),
					_react2.default.createElement(
						'ul',
						{ className: 'list-inline extra-info' },
						_react2.default.createElement(_OgWidget2.default, { og: keg.og }),
						_react2.default.createElement(_FgWidget2.default, { fg: keg.fg }),
						_react2.default.createElement(_BalanceWidget2.default, { balance: keg.balance }),
						_react2.default.createElement(_CaloriesWidget2.default, { calories: keg.calories })
					)
				);
			} else {
				return _react2.default.createElement(
					'td',
					{ className: 'notes-empty' },
					_react2.default.createElement(
						'h2',
						null,
						'Empty'
					)
				);
			}
		}
	}]);

	return NotesWidget;
})(_react2.default.Component);

exports.default = NotesWidget;

},{"./BalanceWidget":8,"./CaloriesWidget":9,"./FgWidget":10,"./OgWidget":13,"numeral":38,"react":"react"}],13:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OgWidget = (function (_React$Component) {
	_inherits(OgWidget, _React$Component);

	function OgWidget() {
		_classCallCheck(this, OgWidget);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(OgWidget).apply(this, arguments));
	}

	_createClass(OgWidget, [{
		key: 'render',
		value: function render() {
			var og = this.props.og;
			if (og && og > 0) {
				return _react2.default.createElement(
					'li',
					null,
					'OG : ',
					(0, _numeral2.default)(og).format('0.000')
				);
			} else {
				return null;
			}
		}
	}]);

	return OgWidget;
})(_react2.default.Component);

exports.default = OgWidget;

},{"numeral":38,"react":"react"}],14:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuantityWidget = (function (_React$Component) {
	_inherits(QuantityWidget, _React$Component);

	function QuantityWidget() {
		_classCallCheck(this, QuantityWidget);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(QuantityWidget).apply(this, arguments));
	}

	_createClass(QuantityWidget, [{
		key: 'render',
		value: function render() {
			var keg = this.props.keg;
			var quantityInitial = keg.quantityInitial || 0;
			var quantityRemaining = keg.quantityRemaining || 0;

			var percentRemaining = 0;
			if (quantityInitial > 0 && quantityRemaining > 0) {
				percentRemaining = quantityRemaining / quantityInitial * 100;
			}

			var kegclass = "keg-full";
			if (percentRemaining <= 0) {
				kegclass += " keg-empty";
			} else if (percentRemaining < 15) {
				kegclass += " keg-red";
			} else if (percentRemaining < 25) {
				kegclass += " keg-orange";
			} else if (percentRemaining < 45) {
				kegclass += " keg-yellow";
			} else if (percentRemaining < 100) {
				kegclass += " keg-green";
			} else {
				//kegclass = "keg-full";
			}

			var kegstyle = {
				height: percentRemaining + "%"
			};

			if (keg && quantityInitial && quantityRemaining) {
				return _react2.default.createElement(
					'td',
					{ className: 'keg' },
					_react2.default.createElement(
						'div',
						{ className: 'keg-container' },
						_react2.default.createElement(
							'div',
							{ className: 'keg-indicator' },
							_react2.default.createElement('div', { className: kegclass, style: kegstyle })
						)
					),
					_react2.default.createElement(
						'p',
						null,
						(0, _numeral2.default)(keg.quantityRemaining).format(0),
						' fl oz remaining'
					)
				);
			} else {
				return _react2.default.createElement('td', null);
			}
		}
	}]);

	return QuantityWidget;
})(_react2.default.Component);

exports.default = QuantityWidget;

},{"numeral":38,"react":"react"}],15:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SrmWidget = (function (_React$Component) {
	_inherits(SrmWidget, _React$Component);

	function SrmWidget() {
		_classCallCheck(this, SrmWidget);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SrmWidget).apply(this, arguments));
	}

	_createClass(SrmWidget, [{
		key: 'render',
		value: function render() {
			var keg = this.props.keg;

			var srm = keg.srm || 0.0;

			var srmToColor = [{ "srm": 0.1, "color": "rgb(248,248,230))" }, { "srm": 0.2, "color": "rgb(248,248,220))" }, { "srm": 0.3, "color": "rgb(247,247,199))" }, { "srm": 0.4, "color": "rgb(244,249,185))" }, { "srm": 0.5, "color": "rgb(247,249,180))" }, { "srm": 0.6, "color": "rgb(248,249,178))" }, { "srm": 0.7, "color": "rgb(244,246,169))" }, { "srm": 0.8, "color": "rgb(245,247,166))" }, { "srm": 0.9, "color": "rgb(246,247,156))" }, { "srm": 1, "color": "rgb(243,249,147))" }, { "srm": 1.1, "color": "rgb(246,248,141))" }, { "srm": 1.2, "color": "rgb(246,249,136))" }, { "srm": 1.3, "color": "rgb(245,250,128))" }, { "srm": 1.4, "color": "rgb(246,249,121))" }, { "srm": 1.5, "color": "rgb(248,249,114)" }, { "srm": 1.6, "color": "rgb(243,249,104)" }, { "srm": 1.7, "color": "rgb(246,248,107)" }, { "srm": 1.8, "color": "rgb(248,247,99)" }, { "srm": 1.9, "color": "rgb(245,247,92)" }, { "srm": 2, "color": "rgb(248,247,83)" }, { "srm": 2.1, "color": "rgb(244,248,72)" }, { "srm": 2.2, "color": "rgb(248,247,73)" }, { "srm": 2.3, "color": "rgb(246,247,62)" }, { "srm": 2.4, "color": "rgb(241,248,53)" }, { "srm": 2.5, "color": "rgb(244,247,48)" }, { "srm": 2.6, "color": "rgb(246,249,40)" }, { "srm": 2.7, "color": "rgb(243,249,34)" }, { "srm": 2.8, "color": "rgb(245,247,30)" }, { "srm": 2.9, "color": "rgb(248,245,22)" }, { "srm": 3, "color": "rgb(246,245,19)" }, { "srm": 3.1, "color": "rgb(244,242,22)" }, { "srm": 3.2, "color": "rgb(244,240,21)" }, { "srm": 3.3, "color": "rgb(243,242,19)" }, { "srm": 3.4, "color": "rgb(244,238,24)" }, { "srm": 3.5, "color": "rgb(244,237,29)" }, { "srm": 3.6, "color": "rgb(238,233,22)" }, { "srm": 3.7, "color": "rgb(240,233,23)" }, { "srm": 3.8, "color": "rgb(238,231,25)" }, { "srm": 3.9, "color": "rgb(234,230,21)" }, { "srm": 4, "color": "rgb(236,230,26)" }, { "srm": 4.1, "color": "rgb(230,225,24)" }, { "srm": 4.2, "color": "rgb(232,225,25)" }, { "srm": 4.3, "color": "rgb(230,221,27)" }, { "srm": 4.4, "color": "rgb(224,218,23)" }, { "srm": 4.5, "color": "rgb(229,216,31)" }, { "srm": 4.6, "color": "rgb(229,214,30)" }, { "srm": 4.7, "color": "rgb(223,213,26)" }, { "srm": 4.8, "color": "rgb(226,213,28)" }, { "srm": 4.9, "color": "rgb(223,209,29)" }, { "srm": 5, "color": "rgb(224,208,27)" }, { "srm": 5.1, "color": "rgb(224,204,32)" }, { "srm": 5.2, "color": "rgb(221,204,33)" }, { "srm": 5.3, "color": "rgb(220,203,29)" }, { "srm": 5.4, "color": "rgb(218,200,32)" }, { "srm": 5.5, "color": "rgb(220,197,34)" }, { "srm": 5.6, "color": "rgb(218,196,41)" }, { "srm": 5.7, "color": "rgb(217,194,43)" }, { "srm": 5.8, "color": "rgb(216,192,39)" }, { "srm": 5.9, "color": "rgb(213,190,37)" }, { "srm": 6, "color": "rgb(213,188,38)" }, { "srm": 6.1, "color": "rgb(212,184,39)" }, { "srm": 6.2, "color": "rgb(214,183,43)" }, { "srm": 6.3, "color": "rgb(213,180,45)" }, { "srm": 6.4, "color": "rgb(210,179,41)" }, { "srm": 6.5, "color": "rgb(208,178,42)" }, { "srm": 6.6, "color": "rgb(208,176,46)" }, { "srm": 6.7, "color": "rgb(204,172,48)" }, { "srm": 6.8, "color": "rgb(204,172,52)" }, { "srm": 6.9, "color": "rgb(205,170,55)" }, { "srm": 7, "color": "rgb(201,167,50)" }, { "srm": 7.1, "color": "rgb(202,167,52)" }, { "srm": 7.2, "color": "rgb(201,166,51)" }, { "srm": 7.3, "color": "rgb(199,162,54)" }, { "srm": 7.4, "color": "rgb(198,160,56)" }, { "srm": 7.5, "color": "rgb(200,158,60)" }, { "srm": 7.6, "color": "rgb(194,156,54)" }, { "srm": 7.7, "color": "rgb(196,155,54)" }, { "srm": 7.8, "color": "rgb(198,151,60)" }, { "srm": 7.9, "color": "rgb(193,150,60)" }, { "srm": 8, "color": "rgb(191,146,59)" }, { "srm": 8.1, "color": "rgb(190,147,57)" }, { "srm": 8.2, "color": "rgb(190,147,59)" }, { "srm": 8.3, "color": "rgb(190,145,60)" }, { "srm": 8.4, "color": "rgb(186,148,56)" }, { "srm": 8.5, "color": "rgb(190,145,58)" }, { "srm": 8.6, "color": "rgb(193,145,59)" }, { "srm": 8.7, "color": "rgb(190,145,58)" }, { "srm": 8.8, "color": "rgb(191,143,59)" }, { "srm": 8.9, "color": "rgb(191,141,61)" }, { "srm": 9, "color": "rgb(190,140,58)" }, { "srm": 9.1, "color": "rgb(192,140,61)" }, { "srm": 9.2, "color": "rgb(193,138,62)" }, { "srm": 9.3, "color": "rgb(192,137,59)" }, { "srm": 9.4, "color": "rgb(193,136,59)" }, { "srm": 9.5, "color": "rgb(195,135,63)" }, { "srm": 9.6, "color": "rgb(191,136,58)" }, { "srm": 9.7, "color": "rgb(191,134,67)" }, { "srm": 9.8, "color": "rgb(193,131,67)" }, { "srm": 9.9, "color": "rgb(190,130,58)" }, { "srm": 10, "color": "rgb(191,129,58)" }, { "srm": 10.1, "color": "rgb(191,131,57)" }, { "srm": 10.2, "color": "rgb(191,129,58)" }, { "srm": 10.3, "color": "rgb(191,129,58)" }, { "srm": 10.4, "color": "rgb(190,129,55)" }, { "srm": 10.5, "color": "rgb(191,127,59)" }, { "srm": 10.6, "color": "rgb(194,126,59)" }, { "srm": 10.7, "color": "rgb(188,128,54)" }, { "srm": 10.8, "color": "rgb(190,124,55)" }, { "srm": 10.9, "color": "rgb(193,122,55)" }, { "srm": 11, "color": "rgb(190,124,55)" }, { "srm": 11.1, "color": "rgb(194,121,59)" }, { "srm": 11.2, "color": "rgb(193,120,56)" }, { "srm": 11.3, "color": "rgb(190,119,52)" }, { "srm": 11.4, "color": "rgb(182,117,54)" }, { "srm": 11.5, "color": "rgb(196,116,59)" }, { "srm": 11.6, "color": "rgb(191,118,56)" }, { "srm": 11.7, "color": "rgb(190,116,57)" }, { "srm": 11.8, "color": "rgb(191,115,58)" }, { "srm": 11.9, "color": "rgb(189,115,56)" }, { "srm": 12, "color": "rgb(191,113,56)" }, { "srm": 12.1, "color": "rgb(191,113,53)" }, { "srm": 12.2, "color": "rgb(188,112,57)" }, { "srm": 12.3, "color": "rgb(190,112,55)" }, { "srm": 12.4, "color": "rgb(184,110,52)" }, { "srm": 12.5, "color": "rgb(188,109,55)" }, { "srm": 12.6, "color": "rgb(189,109,55)" }, { "srm": 12.7, "color": "rgb(186,106,50)" }, { "srm": 12.8, "color": "rgb(190,103,52)" }, { "srm": 12.9, "color": "rgb(189,104,54)" }, { "srm": 13, "color": "rgb(188,103,51)" }, { "srm": 13.1, "color": "rgb(188,103,51)" }, { "srm": 13.2, "color": "rgb(186,101,51)" }, { "srm": 13.3, "color": "rgb(186,102,56)" }, { "srm": 13.4, "color": "rgb(185,100,56)" }, { "srm": 13.5, "color": "rgb(185,98,59)" }, { "srm": 13.6, "color": "rgb(183,98,54)" }, { "srm": 13.7, "color": "rgb(181,100,53)" }, { "srm": 13.8, "color": "rgb(182,97,55)" }, { "srm": 13.9, "color": "rgb(177,97,51)" }, { "srm": 14, "color": "rgb(178,96,51)" }, { "srm": 14.1, "color": "rgb(176,96,49)" }, { "srm": 14.2, "color": "rgb(177,96,55)" }, { "srm": 14.3, "color": "rgb(178,95,55)" }, { "srm": 14.4, "color": "rgb(171,94,55)" }, { "srm": 14.5, "color": "rgb(171,92,56)" }, { "srm": 14.6, "color": "rgb(172,93,59)" }, { "srm": 14.7, "color": "rgb(168,92,55)" }, { "srm": 14.8, "color": "rgb(169,90,54)" }, { "srm": 14.9, "color": "rgb(168,88,57)" }, { "srm": 15, "color": "rgb(165,89,54)" }, { "srm": 15.1, "color": "rgb(166,88,54)" }, { "srm": 15.2, "color": "rgb(165,88,58)" }, { "srm": 15.3, "color": "rgb(161,88,52)" }, { "srm": 15.4, "color": "rgb(163,85,55)" }, { "srm": 15.5, "color": "rgb(160,86,56)" }, { "srm": 15.6, "color": "rgb(158,85,57)" }, { "srm": 15.7, "color": "rgb(158,86,54)" }, { "srm": 15.8, "color": "rgb(159,84,57)" }, { "srm": 15.9, "color": "rgb(156,83,53)" }, { "srm": 16, "color": "rgb(152,83,54)" }, { "srm": 16.1, "color": "rgb(150,83,55)" }, { "srm": 16.2, "color": "rgb(150,81,56)" }, { "srm": 16.3, "color": "rgb(146,81,56)" }, { "srm": 16.4, "color": "rgb(147,79,54)" }, { "srm": 16.5, "color": "rgb(147,79,55)" }, { "srm": 16.6, "color": "rgb(146,78,54)" }, { "srm": 16.7, "color": "rgb(142,77,51)" }, { "srm": 16.8, "color": "rgb(143,79,53)" }, { "srm": 16.9, "color": "rgb(142,77,54)" }, { "srm": 17, "color": "rgb(141,76,50)" }, { "srm": 17.1, "color": "rgb(140,75,50)" }, { "srm": 17.2, "color": "rgb(138,73,49)" }, { "srm": 17.3, "color": "rgb(135,70,45)" }, { "srm": 17.4, "color": "rgb(136,71,49)" }, { "srm": 17.5, "color": "rgb(140,72,49)" }, { "srm": 17.6, "color": "rgb(128,70,45)" }, { "srm": 17.7, "color": "rgb(129,71,46)" }, { "srm": 17.8, "color": "rgb(130,69,47)" }, { "srm": 17.9, "color": "rgb(123,69,45)" }, { "srm": 18, "color": "rgb(124,69,45)" }, { "srm": 18.1, "color": "rgb(121,66,40)" }, { "srm": 18.2, "color": "rgb(120,67,40)" }, { "srm": 18.3, "color": "rgb(119,64,38)" }, { "srm": 18.4, "color": "rgb(116,63,34)" }, { "srm": 18.5, "color": "rgb(120,63,35)" }, { "srm": 18.6, "color": "rgb(120,62,37)" }, { "srm": 18.7, "color": "rgb(112,63,35)" }, { "srm": 18.8, "color": "rgb(111,62,36)" }, { "srm": 18.9, "color": "rgb(109,60,34)" }, { "srm": 19, "color": "rgb(107,58,30)" }, { "srm": 19.1, "color": "rgb(106,57,31)" }, { "srm": 19.2, "color": "rgb(107,56,31)" }, { "srm": 19.3, "color": "rgb(105,56,28)" }, { "srm": 19.4, "color": "rgb(105,56,28)" }, { "srm": 19.5, "color": "rgb(104,52,31)" }, { "srm": 19.6, "color": "rgb(102,53,27)" }, { "srm": 19.7, "color": "rgb(100,53,26)" }, { "srm": 19.8, "color": "rgb(99,52,25)" }, { "srm": 19.9, "color": "rgb(93,53,24)" }, { "srm": 20, "color": "rgb(93,52,26)" }, { "srm": 20.1, "color": "rgb(89,49,20)" }, { "srm": 20.2, "color": "rgb(90,50,21)" }, { "srm": 20.3, "color": "rgb(91,48,20)" }, { "srm": 20.4, "color": "rgb(83,48,15)" }, { "srm": 20.5, "color": "rgb(88,48,17)" }, { "srm": 20.6, "color": "rgb(86,46,17)" }, { "srm": 20.7, "color": "rgb(81,45,15)" }, { "srm": 20.8, "color": "rgb(83,44,15)" }, { "srm": 20.9, "color": "rgb(81,45,15)" }, { "srm": 21, "color": "rgb(78,42,12)" }, { "srm": 21.1, "color": "rgb(77,43,12)" }, { "srm": 21.2, "color": "rgb(75,41,12)" }, { "srm": 21.3, "color": "rgb(74,41,5)" }, { "srm": 21.4, "color": "rgb(78,40,23)" }, { "srm": 21.5, "color": "rgb(83,43,46)" }, { "srm": 21.6, "color": "rgb(78,43,41)" }, { "srm": 21.7, "color": "rgb(78,40,41)" }, { "srm": 21.8, "color": "rgb(76,41,41)" }, { "srm": 21.9, "color": "rgb(74,39,39)" }, { "srm": 22, "color": "rgb(74,39,39)" }, { "srm": 22.1, "color": "rgb(69,39,35)" }, { "srm": 22.2, "color": "rgb(70,37,37)" }, { "srm": 22.3, "color": "rgb(68,38,36)" }, { "srm": 22.4, "color": "rgb(64,35,34)" }, { "srm": 22.5, "color": "rgb(64,35,34)" }, { "srm": 22.6, "color": "rgb(62,33,32)" }, { "srm": 22.7, "color": "rgb(58,33,31)" }, { "srm": 22.8, "color": "rgb(61,33,31)" }, { "srm": 22.9, "color": "rgb(58,33,33)" }, { "srm": 23, "color": "rgb(54,31,27)" }, { "srm": 23.1, "color": "rgb(52,29,28)" }, { "srm": 23.2, "color": "rgb(52,29,28)" }, { "srm": 23.3, "color": "rgb(49,28,27)" }, { "srm": 23.4, "color": "rgb(48,27,26)" }, { "srm": 23.5, "color": "rgb(48,27,26)" }, { "srm": 23.6, "color": "rgb(44,25,25)" }, { "srm": 23.7, "color": "rgb(44,25,23)" }, { "srm": 23.8, "color": "rgb(42,24,26)" }, { "srm": 23.9, "color": "rgb(40,23,22)" }, { "srm": 24, "color": "rgb(38,23,22)" }, { "srm": 24.1, "color": "rgb(38,23,22)" }, { "srm": 24.2, "color": "rgb(38,23,22)" }, { "srm": 24.3, "color": "rgb(38,23,22)" }, { "srm": 24.4, "color": "rgb(38,23,22)" }, { "srm": 24.5, "color": "rgb(38,23,22)" }, { "srm": 24.6, "color": "rgb(38,23,22)" }, { "srm": 24.7, "color": "rgb(38,23,22)" }, { "srm": 24.8, "color": "rgb(38,23,22)" }, { "srm": 24.9, "color": "rgb(38,23,22)" }, { "srm": 25, "color": "rgb(38,23,22)" }, { "srm": 25.1, "color": "rgb(38,23,22)" }, { "srm": 25.2, "color": "rgb(38,23,22)" }, { "srm": 25.3, "color": "rgb(38,23,22)" }, { "srm": 25.4, "color": "rgb(38,23,22)" }, { "srm": 25.5, "color": "rgb(38,23,22)" }, { "srm": 25.6, "color": "rgb(38,23,24)" }, { "srm": 25.7, "color": "rgb(25,16,15)" }, { "srm": 25.8, "color": "rgb(25,16,15)" }, { "srm": 25.9, "color": "rgb(25,16,15)" }, { "srm": 26, "color": "rgb(25,16,15)" }, { "srm": 26.1, "color": "rgb(25,16,15)" }, { "srm": 26.2, "color": "rgb(25,16,15)" }, { "srm": 26.3, "color": "rgb(25,16,15)" }, { "srm": 26.4, "color": "rgb(25,16,15)" }, { "srm": 26.5, "color": "rgb(25,16,15)" }, { "srm": 26.6, "color": "rgb(25,16,15)" }, { "srm": 26.7, "color": "rgb(25,16,15)" }, { "srm": 26.8, "color": "rgb(25,16,15)" }, { "srm": 26.9, "color": "rgb(25,16,15)" }, { "srm": 27, "color": "rgb(25,16,15)" }, { "srm": 27.1, "color": "rgb(25,16,15)" }, { "srm": 27.2, "color": "rgb(25,16,15)" }, { "srm": 27.3, "color": "rgb(18,13,12)" }, { "srm": 27.4, "color": "rgb(18,13,12)" }, { "srm": 27.5, "color": "rgb(18,13,12)" }, { "srm": 27.6, "color": "rgb(18,13,12)" }, { "srm": 27.7, "color": "rgb(18,13,12)" }, { "srm": 27.8, "color": "rgb(18,13,12)" }, { "srm": 27.9, "color": "rgb(18,13,12)" }, { "srm": 28, "color": "rgb(18,13,12)" }, { "srm": 28.1, "color": "rgb(18,13,12)" }, { "srm": 28.2, "color": "rgb(18,13,12)" }, { "srm": 28.3, "color": "rgb(18,13,12)" }, { "srm": 28.4, "color": "rgb(18,13,12)" }, { "srm": 28.5, "color": "rgb(18,13,12)" }, { "srm": 28.6, "color": "rgb(18,13,12)" }, { "srm": 28.7, "color": "rgb(17,13,10)" }, { "srm": 28.8, "color": "rgb(18,13,12)" }, { "srm": 28.9, "color": "rgb(16,11,10)" }, { "srm": 29, "color": "rgb(16,11,10)" }, { "srm": 29.1, "color": "rgb(16,11,10)" }, { "srm": 29.2, "color": "rgb(16,11,10)" }, { "srm": 29.3, "color": "rgb(16,11,10)" }, { "srm": 29.4, "color": "rgb(16,11,10)" }, { "srm": 29.5, "color": "rgb(16,11,10)" }, { "srm": 29.6, "color": "rgb(16,11,10)" }, { "srm": 29.7, "color": "rgb(16,11,10)" }, { "srm": 29.8, "color": "rgb(16,11,10)" }, { "srm": 29.9, "color": "rgb(16,11,10)" }, { "srm": 30, "color": "rgb(16,11,10)" }, { "srm": 30.1, "color": "rgb(16,11,10)" }, { "srm": 30.2, "color": "rgb(16,11,10)" }, { "srm": 30.3, "color": "rgb(16,11,10)" }, { "srm": 30.4, "color": "rgb(16,11,10)" }, { "srm": 30.5, "color": "rgb(14,9,8)" }, { "srm": 30.6, "color": "rgb(15,10,9)" }, { "srm": 30.7, "color": "rgb(14,9,8)" }, { "srm": 30.8, "color": "rgb(14,9,8)" }, { "srm": 30.9, "color": "rgb(14,9,8)" }, { "srm": 31, "color": "rgb(14,9,8)" }, { "srm": 31.1, "color": "rgb(14,9,8)" }, { "srm": 31.2, "color": "rgb(14,9,8)" }, { "srm": 31.3, "color": "rgb(14,9,8)" }, { "srm": 31.4, "color": "rgb(14,9,8)" }, { "srm": 31.5, "color": "rgb(14,9,8)" }, { "srm": 31.6, "color": "rgb(14,9,8)" }, { "srm": 31.7, "color": "rgb(14,9,8)" }, { "srm": 31.8, "color": "rgb(14,9,8)" }, { "srm": 31.9, "color": "rgb(14,9,8)" }, { "srm": 32, "color": "rgb(15,11,8)" }, { "srm": 32.1, "color": "rgb(12,9,7)" }, { "srm": 32.2, "color": "rgb(12,9,7)" }, { "srm": 32.3, "color": "rgb(12,9,7)" }, { "srm": 32.4, "color": "rgb(12,9,7)" }, { "srm": 32.5, "color": "rgb(12,9,7)" }, { "srm": 32.6, "color": "rgb(12,9,7)" }, { "srm": 32.7, "color": "rgb(12,9,7)" }, { "srm": 32.8, "color": "rgb(12,9,7)" }, { "srm": 32.9, "color": "rgb(12,9,7)" }, { "srm": 33, "color": "rgb(12,9,7)" }, { "srm": 33.1, "color": "rgb(12,9,7)" }, { "srm": 33.2, "color": "rgb(12,9,7)" }, { "srm": 33.3, "color": "rgb(12,9,7)" }, { "srm": 33.4, "color": "rgb(12,9,7)" }, { "srm": 33.5, "color": "rgb(12,9,7)" }, { "srm": 33.6, "color": "rgb(12,9,7)" }, { "srm": 33.7, "color": "rgb(10,7,7)" }, { "srm": 33.8, "color": "rgb(10,7,5)" }, { "srm": 33.9, "color": "rgb(8,7,7)" }, { "srm": 34, "color": "rgb(8,7,7)" }, { "srm": 34.1, "color": "rgb(8,7,7)" }, { "srm": 34.2, "color": "rgb(8,7,7)" }, { "srm": 34.3, "color": "rgb(8,7,7)" }, { "srm": 34.4, "color": "rgb(8,7,7)" }, { "srm": 34.5, "color": "rgb(8,7,7)" }, { "srm": 34.6, "color": "rgb(8,7,7)" }, { "srm": 34.7, "color": "rgb(8,7,7)" }, { "srm": 34.8, "color": "rgb(8,7,7)" }, { "srm": 34.9, "color": "rgb(8,7,7)" }, { "srm": 35, "color": "rgb(8,7,7)" }, { "srm": 35.1, "color": "rgb(8,7,7)" }, { "srm": 35.2, "color": "rgb(8,7,7)" }, { "srm": 35.3, "color": "rgb(7,6,6)" }, { "srm": 35.4, "color": "rgb(7,6,6)" }, { "srm": 35.5, "color": "rgb(7,6,6)" }, { "srm": 35.6, "color": "rgb(7,6,6)" }, { "srm": 35.7, "color": "rgb(7,6,6)" }, { "srm": 35.8, "color": "rgb(7,6,6)" }, { "srm": 35.9, "color": "rgb(7,6,6)" }, { "srm": 36, "color": "rgb(7,6,6)" }, { "srm": 36.1, "color": "rgb(7,6,6)" }, { "srm": 36.2, "color": "rgb(7,6,6)" }, { "srm": 36.3, "color": "rgb(7,6,6)" }, { "srm": 36.4, "color": "rgb(7,6,6)" }, { "srm": 36.5, "color": "rgb(7,6,6)" }, { "srm": 36.6, "color": "rgb(7,6,6)" }, { "srm": 36.7, "color": "rgb(7,7,4)" }, { "srm": 36.8, "color": "rgb(6,6,3)" }, { "srm": 36.9, "color": "rgb(6,5,5)" }, { "srm": 37, "color": "rgb(4,5,4)" }, { "srm": 37.1, "color": "rgb(4,5,4)" }, { "srm": 37.2, "color": "rgb(4,5,4)" }, { "srm": 37.3, "color": "rgb(4,5,4)" }, { "srm": 37.4, "color": "rgb(4,5,4)" }, { "srm": 37.5, "color": "rgb(4,5,4)" }, { "srm": 37.6, "color": "rgb(4,5,4)" }, { "srm": 37.7, "color": "rgb(4,5,4)" }, { "srm": 37.8, "color": "rgb(4,5,4)" }, { "srm": 37.9, "color": "rgb(4,5,4)" }, { "srm": 38, "color": "rgb(4,5,4)" }, { "srm": 38.1, "color": "rgb(4,5,4)" }, { "srm": 38.2, "color": "rgb(4,5,4)" }, { "srm": 38.3, "color": "rgb(4,5,4)" }, { "srm": 38.4, "color": "rgb(4,5,4)" }, { "srm": 38.5, "color": "rgb(3,4,3)" }, { "srm": 38.6, "color": "rgb(4,5,4)" }, { "srm": 38.7, "color": "rgb(3,4,3)" }, { "srm": 38.8, "color": "rgb(3,4,3)" }, { "srm": 38.9, "color": "rgb(3,4,3)" }, { "srm": 39, "color": "rgb(3,4,3)" }, { "srm": 39.1, "color": "rgb(3,4,3)" }, { "srm": 39.2, "color": "rgb(3,4,3)" }, { "srm": 39.3, "color": "rgb(3,4,3)" }, { "srm": 39.4, "color": "rgb(3,4,3)" }, { "srm": 39.5, "color": "rgb(3,4,3)" }, { "srm": 39.6, "color": "rgb(3,4,3)" }, { "srm": 39.7, "color": "rgb(3,4,3)" }, { "srm": 39.8, "color": "rgb(3,4,3)" }, { "srm": 39.9, "color": "rgb(3,4,3)" }, { "srm": 40, "color": "rgb(3,4,3)" }];

			var rgb = (0, _underscore.min)((0, _underscore.filter)(srmToColor, function (elem) {
				return elem.srm > srm;
			}), function (elem) {
				return elem.srm;
			}).color;

			var indicatorStyle = {
				backgroundColor: rgb
			};

			if (keg && keg.srm) {
				return _react2.default.createElement(
					'td',
					{ className: 'srm' },
					_react2.default.createElement(
						'div',
						{ className: 'srm-container' },
						_react2.default.createElement('div', { className: 'srm-indicator', style: indicatorStyle }),
						_react2.default.createElement('div', { className: 'srm-stroke' })
					),
					_react2.default.createElement(
						'p',
						null,
						(0, _numeral2.default)(keg.srm).format('0.0'),
						' SRM'
					)
				);
			} else {
				return _react2.default.createElement('td', null);
			}
		}
	}]);

	return SrmWidget;
})(_react2.default.Component);

exports.default = SrmWidget;

},{"numeral":38,"react":"react","underscore":"underscore"}],16:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":17,"history/lib/createBrowserHistory":25,"react":"react","react-dom":"react-dom","react-router":"react-router"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default })
);

},{"./components/App":3,"./components/Home":6,"react":"react","react-router":"react-router"}],18:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeStore = (function () {
	function HomeStore() {
		_classCallCheck(this, HomeStore);

		this.bindActions(_HomeActions2.default);
		this.taps = [];
	}

	_createClass(HomeStore, [{
		key: 'onGetTapsSuccess',
		value: function onGetTapsSuccess(data) {
			this.taps = data;
		}
	}, {
		key: 'onGetTapsFail',
		value: function onGetTapsFail(errorMessage) {
			toastr.error(errorMessage);
		}
	}]);

	return HomeStore;
})();

exports.default = _alt2.default.createStore(HomeStore);

},{"../actions/HomeActions":1,"../alt":2}],19:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],20:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],21:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],22:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))
},{"_process":19,"warning":37}],23:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],24:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],25:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    return history.createLocation(path, state, undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":20,"./DOMStateStorage":22,"./DOMUtils":23,"./ExecutionEnvironment":24,"./createDOMHistory":26,"_process":19,"invariant":36}],26:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./DOMUtils":23,"./ExecutionEnvironment":24,"./createHistory":27,"_process":19,"invariant":36}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var _getCurrentLocation = getCurrentLocation();

          var pathname = _getCurrentLocation.pathname;
          var search = _getCurrentLocation.search;

          var currentPath = pathname + search;
          var path = nextLocation.pathname + nextLocation.search;

          if (currentPath === path) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function pushState(state, path) {
    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
  }

  function push(path) {
    pushState(null, path);
  }

  function replaceState(state, path) {
    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
  }

  function replace(path) {
    replaceState(null, path);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(path) {
    if (path == null || typeof path === 'string') return path;

    var pathname = path.pathname;
    var search = path.search;
    var hash = path.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(path) {
    return createPath(path);
  }

  function createLocation(path, state, action) {
    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

    return _createLocation3['default'](path, state, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    pushState: pushState,
    replaceState: replaceState,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":20,"./AsyncUtils":21,"./createLocation":28,"./deprecate":29,"./runTransitionHook":32,"deep-equal":33}],28:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof path === 'string') path = _parsePath2['default'](path);

  var pathname = path.pathname || '/';
  var search = path.search || '';
  var hash = path.hash || '';

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":20,"./parsePath":31}],29:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":19,"warning":37}],30:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],31:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./extractPath":30,"_process":19,"warning":37}],32:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":19,"warning":37}],33:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":34,"./lib/keys.js":35}],34:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],35:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],36:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":19}],37:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"_process":19}],38:[function(require,module,exports){
/*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */

(function () {

    /************************************
        Constants
    ************************************/

    var numeral,
        VERSION = '1.5.3',
        // internal storage for language config files
        languages = {},
        currentLanguage = 'en',
        zeroFormat = null,
        defaultFormat = '0,0',
        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports);


    /************************************
        Constructors
    ************************************/


    // Numeral prototype object
    function Numeral (number) {
        this._value = number;
    }

    /**
     * Implementation of toFixed() that treats floats more like decimals
     *
     * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
     * problems for accounting- and finance-related software.
     */
    function toFixed (value, precision, roundingFunction, optionals) {
        var power = Math.pow(10, precision),
            optionalsRegExp,
            output;
            
        //roundingFunction = (roundingFunction !== undefined ? roundingFunction : Math.round);
        // Multiply up by precision, round accurately, then divide and use native toFixed():
        output = (roundingFunction(value * power) / power).toFixed(precision);

        if (optionals) {
            optionalsRegExp = new RegExp('0{1,' + optionals + '}$');
            output = output.replace(optionalsRegExp, '');
        }

        return output;
    }

    /************************************
        Formatting
    ************************************/

    // determine what type of formatting we need to do
    function formatNumeral (n, format, roundingFunction) {
        var output;

        // figure out what kind of format we are dealing with
        if (format.indexOf('$') > -1) { // currency!!!!!
            output = formatCurrency(n, format, roundingFunction);
        } else if (format.indexOf('%') > -1) { // percentage
            output = formatPercentage(n, format, roundingFunction);
        } else if (format.indexOf(':') > -1) { // time
            output = formatTime(n, format);
        } else { // plain ol' numbers or bytes
            output = formatNumber(n._value, format, roundingFunction);
        }

        // return string
        return output;
    }

    // revert to number
    function unformatNumeral (n, string) {
        var stringOriginal = string,
            thousandRegExp,
            millionRegExp,
            billionRegExp,
            trillionRegExp,
            suffixes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            bytesMultiplier = false,
            power;

        if (string.indexOf(':') > -1) {
            n._value = unformatTime(string);
        } else {
            if (string === zeroFormat) {
                n._value = 0;
            } else {
                if (languages[currentLanguage].delimiters.decimal !== '.') {
                    string = string.replace(/\./g,'').replace(languages[currentLanguage].delimiters.decimal, '.');
                }

                // see if abbreviations are there so that we can multiply to the correct number
                thousandRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.thousand + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                millionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.million + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                billionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.billion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                trillionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.trillion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');

                // see if bytes are there so that we can multiply to the correct number
                for (power = 0; power <= suffixes.length; power++) {
                    bytesMultiplier = (string.indexOf(suffixes[power]) > -1) ? Math.pow(1024, power + 1) : false;

                    if (bytesMultiplier) {
                        break;
                    }
                }

                // do some math to create our number
                n._value = ((bytesMultiplier) ? bytesMultiplier : 1) * ((stringOriginal.match(thousandRegExp)) ? Math.pow(10, 3) : 1) * ((stringOriginal.match(millionRegExp)) ? Math.pow(10, 6) : 1) * ((stringOriginal.match(billionRegExp)) ? Math.pow(10, 9) : 1) * ((stringOriginal.match(trillionRegExp)) ? Math.pow(10, 12) : 1) * ((string.indexOf('%') > -1) ? 0.01 : 1) * (((string.split('-').length + Math.min(string.split('(').length-1, string.split(')').length-1)) % 2)? 1: -1) * Number(string.replace(/[^0-9\.]+/g, ''));

                // round if we are talking about bytes
                n._value = (bytesMultiplier) ? Math.ceil(n._value) : n._value;
            }
        }
        return n._value;
    }

    function formatCurrency (n, format, roundingFunction) {
        var symbolIndex = format.indexOf('$'),
            openParenIndex = format.indexOf('('),
            minusSignIndex = format.indexOf('-'),
            space = '',
            spliceIndex,
            output;

        // check for space before or after currency
        if (format.indexOf(' $') > -1) {
            space = ' ';
            format = format.replace(' $', '');
        } else if (format.indexOf('$ ') > -1) {
            space = ' ';
            format = format.replace('$ ', '');
        } else {
            format = format.replace('$', '');
        }

        // format the number
        output = formatNumber(n._value, format, roundingFunction);

        // position the symbol
        if (symbolIndex <= 1) {
            if (output.indexOf('(') > -1 || output.indexOf('-') > -1) {
                output = output.split('');
                spliceIndex = 1;
                if (symbolIndex < openParenIndex || symbolIndex < minusSignIndex){
                    // the symbol appears before the "(" or "-"
                    spliceIndex = 0;
                }
                output.splice(spliceIndex, 0, languages[currentLanguage].currency.symbol + space);
                output = output.join('');
            } else {
                output = languages[currentLanguage].currency.symbol + space + output;
            }
        } else {
            if (output.indexOf(')') > -1) {
                output = output.split('');
                output.splice(-1, 0, space + languages[currentLanguage].currency.symbol);
                output = output.join('');
            } else {
                output = output + space + languages[currentLanguage].currency.symbol;
            }
        }

        return output;
    }

    function formatPercentage (n, format, roundingFunction) {
        var space = '',
            output,
            value = n._value * 100;

        // check for space before %
        if (format.indexOf(' %') > -1) {
            space = ' ';
            format = format.replace(' %', '');
        } else {
            format = format.replace('%', '');
        }

        output = formatNumber(value, format, roundingFunction);
        
        if (output.indexOf(')') > -1 ) {
            output = output.split('');
            output.splice(-1, 0, space + '%');
            output = output.join('');
        } else {
            output = output + space + '%';
        }

        return output;
    }

    function formatTime (n) {
        var hours = Math.floor(n._value/60/60),
            minutes = Math.floor((n._value - (hours * 60 * 60))/60),
            seconds = Math.round(n._value - (hours * 60 * 60) - (minutes * 60));
        return hours + ':' + ((minutes < 10) ? '0' + minutes : minutes) + ':' + ((seconds < 10) ? '0' + seconds : seconds);
    }

    function unformatTime (string) {
        var timeArray = string.split(':'),
            seconds = 0;
        // turn hours and minutes into seconds and add them all up
        if (timeArray.length === 3) {
            // hours
            seconds = seconds + (Number(timeArray[0]) * 60 * 60);
            // minutes
            seconds = seconds + (Number(timeArray[1]) * 60);
            // seconds
            seconds = seconds + Number(timeArray[2]);
        } else if (timeArray.length === 2) {
            // minutes
            seconds = seconds + (Number(timeArray[0]) * 60);
            // seconds
            seconds = seconds + Number(timeArray[1]);
        }
        return Number(seconds);
    }

    function formatNumber (value, format, roundingFunction) {
        var negP = false,
            signed = false,
            optDec = false,
            abbr = '',
            abbrK = false, // force abbreviation to thousands
            abbrM = false, // force abbreviation to millions
            abbrB = false, // force abbreviation to billions
            abbrT = false, // force abbreviation to trillions
            abbrForce = false, // force abbreviation
            bytes = '',
            ord = '',
            abs = Math.abs(value),
            suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            min,
            max,
            power,
            w,
            precision,
            thousands,
            d = '',
            neg = false;

        // check if number is zero and a custom zero format has been set
        if (value === 0 && zeroFormat !== null) {
            return zeroFormat;
        } else {
            // see if we should use parentheses for negative number or if we should prefix with a sign
            // if both are present we default to parentheses
            if (format.indexOf('(') > -1) {
                negP = true;
                format = format.slice(1, -1);
            } else if (format.indexOf('+') > -1) {
                signed = true;
                format = format.replace(/\+/g, '');
            }

            // see if abbreviation is wanted
            if (format.indexOf('a') > -1) {
                // check if abbreviation is specified
                abbrK = format.indexOf('aK') >= 0;
                abbrM = format.indexOf('aM') >= 0;
                abbrB = format.indexOf('aB') >= 0;
                abbrT = format.indexOf('aT') >= 0;
                abbrForce = abbrK || abbrM || abbrB || abbrT;

                // check for space before abbreviation
                if (format.indexOf(' a') > -1) {
                    abbr = ' ';
                    format = format.replace(' a', '');
                } else {
                    format = format.replace('a', '');
                }

                if (abs >= Math.pow(10, 12) && !abbrForce || abbrT) {
                    // trillion
                    abbr = abbr + languages[currentLanguage].abbreviations.trillion;
                    value = value / Math.pow(10, 12);
                } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9) && !abbrForce || abbrB) {
                    // billion
                    abbr = abbr + languages[currentLanguage].abbreviations.billion;
                    value = value / Math.pow(10, 9);
                } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6) && !abbrForce || abbrM) {
                    // million
                    abbr = abbr + languages[currentLanguage].abbreviations.million;
                    value = value / Math.pow(10, 6);
                } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3) && !abbrForce || abbrK) {
                    // thousand
                    abbr = abbr + languages[currentLanguage].abbreviations.thousand;
                    value = value / Math.pow(10, 3);
                }
            }

            // see if we are formatting bytes
            if (format.indexOf('b') > -1) {
                // check for space before
                if (format.indexOf(' b') > -1) {
                    bytes = ' ';
                    format = format.replace(' b', '');
                } else {
                    format = format.replace('b', '');
                }

                for (power = 0; power <= suffixes.length; power++) {
                    min = Math.pow(1024, power);
                    max = Math.pow(1024, power+1);

                    if (value >= min && value < max) {
                        bytes = bytes + suffixes[power];
                        if (min > 0) {
                            value = value / min;
                        }
                        break;
                    }
                }
            }

            // see if ordinal is wanted
            if (format.indexOf('o') > -1) {
                // check for space before
                if (format.indexOf(' o') > -1) {
                    ord = ' ';
                    format = format.replace(' o', '');
                } else {
                    format = format.replace('o', '');
                }

                ord = ord + languages[currentLanguage].ordinal(value);
            }

            if (format.indexOf('[.]') > -1) {
                optDec = true;
                format = format.replace('[.]', '.');
            }

            w = value.toString().split('.')[0];
            precision = format.split('.')[1];
            thousands = format.indexOf(',');

            if (precision) {
                if (precision.indexOf('[') > -1) {
                    precision = precision.replace(']', '');
                    precision = precision.split('[');
                    d = toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
                } else {
                    d = toFixed(value, precision.length, roundingFunction);
                }

                w = d.split('.')[0];

                if (d.split('.')[1].length) {
                    d = languages[currentLanguage].delimiters.decimal + d.split('.')[1];
                } else {
                    d = '';
                }

                if (optDec && Number(d.slice(1)) === 0) {
                    d = '';
                }
            } else {
                w = toFixed(value, null, roundingFunction);
            }

            // format number
            if (w.indexOf('-') > -1) {
                w = w.slice(1);
                neg = true;
            }

            if (thousands > -1) {
                w = w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languages[currentLanguage].delimiters.thousands);
            }

            if (format.indexOf('.') === 0) {
                w = '';
            }

            return ((negP && neg) ? '(' : '') + ((!negP && neg) ? '-' : '') + ((!neg && signed) ? '+' : '') + w + d + ((ord) ? ord : '') + ((abbr) ? abbr : '') + ((bytes) ? bytes : '') + ((negP && neg) ? ')' : '');
        }
    }

    /************************************
        Top Level Functions
    ************************************/

    numeral = function (input) {
        if (numeral.isNumeral(input)) {
            input = input.value();
        } else if (input === 0 || typeof input === 'undefined') {
            input = 0;
        } else if (!Number(input)) {
            input = numeral.fn.unformat(input);
        }

        return new Numeral(Number(input));
    };

    // version number
    numeral.version = VERSION;

    // compare numeral object
    numeral.isNumeral = function (obj) {
        return obj instanceof Numeral;
    };

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    numeral.language = function (key, values) {
        if (!key) {
            return currentLanguage;
        }

        if (key && !values) {
            if(!languages[key]) {
                throw new Error('Unknown language : ' + key);
            }
            currentLanguage = key;
        }

        if (values || !languages[key]) {
            loadLanguage(key, values);
        }

        return numeral;
    };
    
    // This function provides access to the loaded language data.  If
    // no arguments are passed in, it will simply return the current
    // global language object.
    numeral.languageData = function (key) {
        if (!key) {
            return languages[currentLanguage];
        }
        
        if (!languages[key]) {
            throw new Error('Unknown language : ' + key);
        }
        
        return languages[key];
    };

    numeral.language('en', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$'
        }
    });

    numeral.zeroFormat = function (format) {
        zeroFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.defaultFormat = function (format) {
        defaultFormat = typeof(format) === 'string' ? format : '0.0';
    };

    /************************************
        Helpers
    ************************************/

    function loadLanguage(key, values) {
        languages[key] = values;
    }

    /************************************
        Floating-point helpers
    ************************************/

    // The floating-point helper functions and implementation
    // borrows heavily from sinful.js: http://guipn.github.io/sinful.js/

    /**
     * Array.prototype.reduce for browsers that don't support it
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Compatibility
     */
    if ('function' !== typeof Array.prototype.reduce) {
        Array.prototype.reduce = function (callback, opt_initialValue) {
            'use strict';
            
            if (null === this || 'undefined' === typeof this) {
                // At the moment all modern browsers, that support strict mode, have
                // native implementation of Array.prototype.reduce. For instance, IE8
                // does not support strict mode, so this check is actually useless.
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }
            
            if ('function' !== typeof callback) {
                throw new TypeError(callback + ' is not a function');
            }

            var index,
                value,
                length = this.length >>> 0,
                isValueSet = false;

            if (1 < arguments.length) {
                value = opt_initialValue;
                isValueSet = true;
            }

            for (index = 0; length > index; ++index) {
                if (this.hasOwnProperty(index)) {
                    if (isValueSet) {
                        value = callback(value, this[index], index, this);
                    } else {
                        value = this[index];
                        isValueSet = true;
                    }
                }
            }

            if (!isValueSet) {
                throw new TypeError('Reduce of empty array with no initial value');
            }

            return value;
        };
    }

    
    /**
     * Computes the multiplier necessary to make x >= 1,
     * effectively eliminating miscalculations caused by
     * finite precision.
     */
    function multiplier(x) {
        var parts = x.toString().split('.');
        if (parts.length < 2) {
            return 1;
        }
        return Math.pow(10, parts[1].length);
    }

    /**
     * Given a variable number of arguments, returns the maximum
     * multiplier that must be used to normalize an operation involving
     * all of them.
     */
    function correctionFactor() {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function (prev, next) {
            var mp = multiplier(prev),
                mn = multiplier(next);
        return mp > mn ? mp : mn;
        }, -Infinity);
    }        


    /************************************
        Numeral Prototype
    ************************************/


    numeral.fn = Numeral.prototype = {

        clone : function () {
            return numeral(this);
        },

        format : function (inputString, roundingFunction) {
            return formatNumeral(this, 
                  inputString ? inputString : defaultFormat, 
                  (roundingFunction !== undefined) ? roundingFunction : Math.round
              );
        },

        unformat : function (inputString) {
            if (Object.prototype.toString.call(inputString) === '[object Number]') { 
                return inputString; 
            }
            return unformatNumeral(this, inputString ? inputString : defaultFormat);
        },

        value : function () {
            return this._value;
        },

        valueOf : function () {
            return this._value;
        },

        set : function (value) {
            this._value = Number(value);
            return this;
        },

        add : function (value) {
            var corrFactor = correctionFactor.call(null, this._value, value);
            function cback(accum, curr, currI, O) {
                return accum + corrFactor * curr;
            }
            this._value = [this._value, value].reduce(cback, 0) / corrFactor;
            return this;
        },

        subtract : function (value) {
            var corrFactor = correctionFactor.call(null, this._value, value);
            function cback(accum, curr, currI, O) {
                return accum - corrFactor * curr;
            }
            this._value = [value].reduce(cback, this._value * corrFactor) / corrFactor;            
            return this;
        },

        multiply : function (value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = correctionFactor(accum, curr);
                return (accum * corrFactor) * (curr * corrFactor) /
                    (corrFactor * corrFactor);
            }
            this._value = [this._value, value].reduce(cback, 1);
            return this;
        },

        divide : function (value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = correctionFactor(accum, curr);
                return (accum * corrFactor) / (curr * corrFactor);
            }
            this._value = [this._value, value].reduce(cback);            
            return this;
        },

        difference : function (value) {
            return Math.abs(numeral(this._value).subtract(value).value());
        }

    };

    /************************************
        Exposing Numeral
    ************************************/

    // CommonJS module is defined
    if (hasModule) {
        module.exports = numeral;
    }

    /*global ender:false */
    if (typeof ender === 'undefined') {
        // here, `this` means `window` in the browser, or `global` on the server
        // add `numeral` as a global object via a string identifier,
        // for Closure Compiler 'advanced' mode
        this['numeral'] = numeral;
    }

    /*global define:false */
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return numeral;
        });
    }
}).call(this);

},{}]},{},[16]);
