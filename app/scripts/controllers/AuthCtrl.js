(function(){
	function AuthCtrl($scope, $cookies, $state, Auth){

		Auth.isAdmin = false;

		//sign in function to sign in our app with google accounts
		$scope.signIn = function(){
			Auth.$signInWithPopup("google").then(function(result){
				
				console.log(Auth.token);
				console.log(result);

				Auth.userData = result;
				Auth.username =  result.user.displayName;
				Auth.uid = result.user.uid;
				//verify if user is admin user 
				if(Auth.uid === 'POTUpSZ1ABXkW5EIUXzGkgzBuFp1'){
					Auth.isAdmin = true;
				}

				$state.go('room');
				console.log("Signed in as " + result.user.uid);
				
			}).catch(function(error){
				console.error("Authentication failed:", error);
			});
		}
		
		//sign out function to log out user from app
		$scope.signOut = function(){
			if(Auth.username != null){
				alert("Thank you for visiting: " + Auth.username);
				Auth.username = null;
				$state.go('main');
			}
			else{
				alert("ERROR: Sign in required!");
				$state.go('main');
			}
		}
		
	}
	angular
		.module('blocChat')
		.controller('AuthCtrl', ['$scope', '$cookies', '$state', 'Auth', AuthCtrl]);
})();