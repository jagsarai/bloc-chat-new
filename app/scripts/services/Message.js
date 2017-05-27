(function(){
	function Message($firebaseArray){
		var Message = {};
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);

		Message.getByRoomId = function(roomId){
			var roomMessages = ref.orderByChild("roomId").equalTo(roomId);
			//retuns array object which displays all of the rooms that equal the room_id.
			console.log(roomMessages);
			return $firebaseArray(roomMessages);
		};
		
		Message.send = function(newMessage){
			messages.$add(newMessage);
		};
	
	return Message;
		
	}
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();