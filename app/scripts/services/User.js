(function(){
	function User($firebaseArray){
		var User = {};
		var users = firebase.database().ref().child("users");
		var adminUsers = firebase.database().ref().child("admin");
		var adminUsersArray = $firebaseArray(adminUsers);
		var usersArray = $firebaseArray(users);
		
		console.log(usersArray);
		console.log(adminUsersArray);

		User.getUsername = function(username){
			var username = users.orderByChild("username").equalTo(username);
			console.log(username);
			return $firebaseArray(username);
		};

		User.addUser = function(user){
			usersArray.$add(user);
		};

		User.getAdmin = function(){
			console.log($firebaseArray(adminUsers))
			return $firebaseArray(adminUsers);
		}
		
		return User;
	}
	
	angular
		.module('blocChat')
		.factory('User', ['$firebaseArray', User])
})();