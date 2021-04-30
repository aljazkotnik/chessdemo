'use strict';

var d3 = require('d3');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var d3__namespace = /*#__PURE__*/_interopNamespace(d3);

/* 
First setup a webpage that will display the result.

In this example first include:
	- WORKS!! arrow functions
	- WORKS!! classes
	- WORKS!! nested methods in classes (as static!)
	- WORKS!! promises
	- NOT CLEAR HOW TO PROCEED: promise.allSettled
*/



d3__namespace.select("#app")
  .append("h1")
  .html( "Hello World!" );
