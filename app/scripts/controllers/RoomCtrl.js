(function(){
	function RoomCtrl($scope, $cookies, $state, Room, Message, Auth){
		//if user is not logged in or we have a page refresh
		if(Auth.username == undefined || Auth.username == null){
			$state.go('main');
		}

		this.publicRooms = Room.allPublic;
		this.privateRooms = Room.allPrivate;

		$scope.messageObject = {};
		$scope.messageObject.username = Auth.username;
		$scope.messageObject.sentAt = null;
		$scope.messageObject.roomId = null;
		$scope.messageObject.content = null;
		$scope.messageObject.adminUser = Auth.isAdmin;

		
		//selectes a chat room and displays its contents
		$scope.activeRoom = function(roomValue, roomId){
			if($scope.messageObject.username != null){
				$scope.roomValue = roomValue;
				$scope.showMessages = Message.getByRoomId(roomId);
				$scope.messageObject.roomId = roomId;
			}
			else{
				alert("ERROR: Sign is required");
			}
		};	
		
		$scope.addMessage = function(messageContent){

			//checks to see if username is defined.
			if($scope.messageObject.username != null){
				$scope.messageObject.content = messageContent;
				$scope.messageObject.sentAt = new Date().getTime();
				//if there is no message typed and there is no room selected
				if(messageContent != undefined && $scope.messageObject.roomId != null){
					Message.send($scope.messageObject);
					//sets the input text back to empty after sending
					$scope.message.content = "";
				}
				//if message is typed but no chat room is selected
				else if(messageContent === undefined 
						|| $scope.messageObject.roomId === null){
					alert("ERROR: Please select a chat room!");
				}
				else{
					alert("ERROR: Please write a message!");
				}
			}
			else{
				alert("ERROR: Sign in required!");
			}
		};
	}
	angular
		.module('blocChat')
		.controller('RoomCtrl', ['$scope', '$cookies', '$state', 'Room', 'Message', 'Auth', RoomCtrl]);
})();