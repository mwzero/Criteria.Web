function processInstanceCtrl($http, $resource, $scope, $log, $state, $stateParams) {
	
	$scope.processInstance = {};
	
	var processID = $stateParams.id;
	
	var cfg = {url: "/criteria/processes/instances/process?id=" +processID , params: {}, method: 'GET'}
	$http(cfg).then( function(result) {
		
		var x2js = new X2JS();
		$scope.processInstance = x2js.xml_str2json( result.data ).WorkflowProcess;
	});
	
	$scope.runTask = function(processID,activity ) {
		
		var formName = "/forms/" + angular.lowercase(activity).replace(/ /g,"_");
		$log.log("check if exist a form with id:" + formName);
		
		$http.get(formName + ".js").success( function(result) {
			
			$state.transitionTo('form', {
				"process": processID,
				"activity": activity,
				"formName": formName,
				"formUrl": formName + ".js"
			});
			
			
		}, function (data) {
		
			var cfg = {url: "/criteria/tasks/execute?id=" +processID + "&activity=" + activity , params: {}, method: 'GET'}
			$http(cfg).then( function(result) {
			
				var x2js = new X2JS();
				var taskResult = x2js.xml_str2json( result.data);
				
				var cfg2 = {url: "/criteria/processes/instances/process?id=" +taskResult.WorkflowProcess.ProcessId , params: {}, method: 'GET'}
				$http(cfg2).then( function(result) {
					var x2js = new X2JS();
					$scope.processInstance = x2js.xml_str2json( result.data ).WorkflowProcess;
				});
			});
		});
	}
}