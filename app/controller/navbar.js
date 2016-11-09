'use strict';

module.exports = function($scope, $q, OPCUA_Server_Srvce, OPCUA_Subscription_Srvce) {

	// Controller instance
	var vm = this;

	// Controller resources
	vm.server = OPCUA_Server_Srvce.OPCUA_Server;
	vm.subscription = OPCUA_Subscription_Srvce.OPCUA_Subscription;

	// Fetch servers from REST
	vm.getServers = function() {
		var d = $q.defer();

		vm.server.get({
		}, function(servers) {
			vm.servers = servers;
			d.resolve(vm.servers);
		});

		return d.promise;
	};

	// Fetch subscriptions from REST
	vm.getSubscriptions = function() {
		var d = $q.defer();

		vm.subscription.get({
		}, function(subscriptions) {
			vm.subscriptions = subscriptions;
			d.resolve(vm.subscriptions);
		});

		return d.promise;
	};

	// Initialize data
	vm.getServers();
	vm.getSubscriptions();

};