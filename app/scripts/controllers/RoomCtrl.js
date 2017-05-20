(function(){
	function RoomCtrl($scope, $cookies, Room, Message){
		this.rooms = Room.all;
		$scope.messageObject = {};
		$scope.messageObject.username = null;
		$scope.messageObject.sentAt = null;
		$scope.messageObject.roomId = null;
		$scope.messageObject.content = null;
		
		
		$scope.activeRoom = function(roomValue, roomId){
			$scope.roomValue = roomValue;
			$scope.showMessages = Message.getByRoomId(roomId);
			$scope.messageObject.roomId = roomId;
			$scope.messageObject.username = $cookies.username;
		};	
		
		$scope.addMessage = function(messageContent){
			$scope.messageObject.content = messageContent;
			$scope.messageObject.sentAt = new Date().getTime();
			Message.send($scope.messageObject);
		};
		
	}
	angular
		.module('blocChat')
		.controller('RoomCtrl', ['$scope', '$cookies', 'Room', 'Message', RoomCtrl]);
})();