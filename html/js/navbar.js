function navbarCtrl($scope, $log, $http,  $state) {
	
	//$log.log("navbar controller");
	$scope.visibile = true;
	$scope.tasks = {};
	$scope.notifies = {};
	
	$scope.taskSize = ( $scope.tasks.result == null ) ? 0 : $scope.tasks.result.length;
	$scope.notifiesSize = ( $scope.notifies.result == null ) ? 0 : $scope.notifies.result.length;
	
	$scope.showWorklist = function()
	{
		$state.transitionTo('worklist');
	}
	
	$scope.showHome = function()
	{
		$state.transitionTo('login');
	}
    
    $scope.showProcesses = function()
	{
		$state.transitionTo('home');
	}
    
    $state.transitionTo('login');
}

