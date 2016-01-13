(function() {
	'use strict';

	angular
		.module('sas')
		.directive('sasSample', sasSample);

	function sasSample() {

		var directive = {
			restrict: 'EA',
			templateUrl: './components/home/sample-directive.html',
			scope: {

			},
			link: link,
			controller: sasSampleController,
			controllerAs: 'vm',
			bindToController: true // because the scope is isolated
		};

		return directive;

		////////////

		function link(scope, element, attrs) {

		}

		function sasSampleController() {
			var vm = this;

		}

	}

})();