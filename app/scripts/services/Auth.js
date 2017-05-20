(function(){
	function Auth($firebaseAuth){
		var Auth = $firebaseAuth();
	
	return Auth;
		
	}
	angular
		.module('blocChat')
		.factory('Auth', ['$firebaseAuth', Auth]);
})();