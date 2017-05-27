(function(){
	function ModalCtrl($uibModal, $scope, Room){
		this.open = function(){
			var modalInstance = $uibModal.open({
				animation: this.animationsEnabled,
				templateUrl: '/templates/modal.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: 'modal',
				windowClass: 'app-modal-window'
			});
			
			modalInstance.result.then(function(room){
				console.log(room);
				if($scope.messageObject.username != null){
					Room.add(room);
				}
				else{
					alert("ERROR: Sign in required!");
				}
			});
		}
	}
	
	angular
		.module('blocChat')
		.controller('ModalCtrl', ['$uibModal', '$scope', 'Room', ModalCtrl]);
})();