(function(){
	function AuthCtrl($scope, $cookies, Auth){
		$scope.signIn = function(){
			Auth.$signInWithPopup("google").then(function(result){
				
				$cookies.username =  result.user.displayName;
				console.log($cookies.username);
				alert("Welcome " + $cookies.username);
				
			}).catch(function(error){
				console.error("Authentication failed:", error);
			});
		}
	}
	angular
		.module('blocChat')
		.controller('AuthCtrl', ['$scope', '$cookies', 'Auth', AuthCtrl]);
})();