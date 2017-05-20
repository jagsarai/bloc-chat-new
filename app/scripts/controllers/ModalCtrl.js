(function(){
	function ModalCtrl($uibModal, Room){
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
				Room.add(room);
			});
		}
	}
	
	angular
		.module('blocChat')
		.controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();