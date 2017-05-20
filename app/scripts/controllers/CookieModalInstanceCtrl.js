(function(){
	function CookieModalInstanceCtrl($uibModalInstance){
		//Submit the form data to modal.
		this.submit = function(){
			$uibModalInstance.dismiss();
		};
	}
	angular
		.module('blocChat')
		.controller('CookieModalInstanceCtrl', ['$uibModalInstance', CookieModalInstanceCtrl]);
})();