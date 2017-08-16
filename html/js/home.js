function homeCtrl($http, $resource, $scope, $log, $state) {
	
	$scope.processTemplateList = {};
	$scope.processInstanceList = {};
	
	$http.get('/criteria/processes/templates').
        success(function(result) {
			
			$log.log("processes template List: " + JSON.stringify(result));
			
			var x2js = new X2JS();
 			var json = x2js.xml_str2json( result );
			
            
			$scope.processTemplateList = json;
			
        });
		
		
	$http.get('/criteria/processes/instances').
        success(function(result) {
			
			$log.log("processes instance List: " + JSON.stringify(result));
			
			var x2js = new X2JS();
 			var json = x2js.xml_str2json( result );
			
            
			$scope.processInstanceList = json;
			
        });

	$scope.createProcess = function(processName)
	{
		var process2Start = processName.replace(".xml", "");
		var cfg = {url: "/criteria/processes/templates/create?process=" +process2Start , params: {}, method: 'GET'}
		$http(cfg).then( function(result) {
			$state.go('showjson', {content: result});
		});
	};
	
	$scope.showProcess = function(processID)
	{
		$state.go('processinstance', {id: processID});
	};
}