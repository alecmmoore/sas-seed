(function() {

	'use strict';

	angular
		.module('sas')
		.controller('homeController', homeController);

	function homeController() {
		var vm = this;
		vm.username = 'Alec Moore';

	}

})();