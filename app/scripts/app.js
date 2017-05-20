(function(){
	function config($locationProvider, $stateProvider){
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});
		
		$stateProvider
			.state('room', {
				url: '/room',
				controller: 'RoomCtrl as room',
				templateUrl: '/templates/room.html'
		})
			.state('main',{
				url: '/',
				controller: 'AuthCtrl as auth',
				templateUrl: '/templates/main.html'
		});
	}
	angular
		.module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
		.config(config);
})();