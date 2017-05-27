(function(){
	function Auth($firebaseAuth){
		var Auth = $firebaseAuth();
		console.log(Auth);
	return Auth;
		
	}
	angular
		.module('blocChat')
		.factory('Auth', ['$firebaseAuth', Auth]);
})();