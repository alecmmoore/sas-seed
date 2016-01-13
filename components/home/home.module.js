(function() {
	'use strict';

	angular
		.module('sas.home', [])
		.config(function ($routeProvider) {

				$routeProvider
					.when('/home', {
						templateUrl: './templates/pages/home.html',
						controller: 'HomeController'
					});
			}
		);
});