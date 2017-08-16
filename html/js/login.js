function loginCtrl($http, $resource, $scope, $log, $state, $stateParams,$location, $window) {

    $scope.init = function  () {
        
    }
	
    $scope.showFormBuilder = function() {
        $window.open('builder.html', '_blank');
    }
    
    $scope.showFormPreview = function() {
        $window.open('form.html', '_blank');
    }
	
	$scope.init();
}
