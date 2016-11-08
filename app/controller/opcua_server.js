'use strict';

module.exports = function($scope, $log, OPCUA_Server_Srvce) {

	// Controller instance
	var vm = this;

	// Controller resources
	vm.server = OPCUA_Server_Srvce.OPCUA_Server;

	// Fetch servers list
	vm.server.get({}, function(servers) {
		vm.servers = servers;
		$log.debug('opcua_server.ctrl - Fetched servers list. Length: ' + vm.servers.length);
	});

	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	$scope.series = ['Series A', 'Series B'];
	$scope.data = [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
	];
	$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	$scope.options = {
	scales: {
	  yAxes: [
	    {
	      id: 'y-axis-1',
	      type: 'linear',
	      display: true,
	      position: 'left'
	    },
	    {
	      id: 'y-axis-2',
	      type: 'linear',
	      display: true,
	      position: 'right'
	    }
	  ]
	}
	};
	$scope.onClick = function (points, evt) {
		console.log(points, evt);
	};

};