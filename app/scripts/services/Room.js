(function(){
	function Room($firebaseArray){
		var Room = {};
		var pubRef = firebase.database().ref().child("rooms").child("public");
		var pubRooms = $firebaseArray(pubRef);
		var priRef = firebase.database().ref().child("rooms").child("private");
		var priRooms = $firebaseArray(priRef);
		
		Room.allPublic = pubRooms;
		Room.allPrivate = priRooms;
		
		console.log(Room.allPublic);
		console.log(Room.allPrivate);

		Room.addPublic = function(room){
			pubRooms.$add(room);
		}

		Room.addPrivate = function(room){
			priRooms.$add(room);
		}
		
		return Room;
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room])
})();