(function(){
	function ModalInstanceCtrl($uibModalInstance){
		//Submit the form data to modal.
		this.submit = function(){
			$uibModalInstance.close(this.room);
		};
		//cancel the modal after opening it by pressing the modal button.
		this.cancel = function(){
			$uibModalInstance.dismiss('cancel');
		};
	}
	angular
		.module('blocChat')
		.controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();