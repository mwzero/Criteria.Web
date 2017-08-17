function worklistCtrl($http, $resource, $scope, $log, $state, $stateParams) {

	$scope.alltasks = {
		"code": 1
	};
	$scope.personaltasks = {
		"code": 1
	};
	$scope.notifies = {
		"code": 1
	};
	
	$scope.user = "scenario";
	$scope.wiTypes = {};
	
	$scope.showMyTasks = function () {
        
        $http.get("/criteria/workitems?user=" + $scope.user).success( function(result) {
		
		var x2js = new X2JS();
		var activities = x2js.xml_str2json( result);
		
		$scope.alltasks = {
			"code" : 0,
			"activities": activities
		}
		
		}, function (data) {
		
			
		});
        
	}
	
	$scope.showAllTasks = function() {
		
		$http.get("/criteria/activities?user=" + $scope.user).success( function(result) {
		
		var x2js = new X2JS();
		var activities = x2js.xml_str2json( result);
		
		$scope.alltasks = {
			"code" : 0,
			"activities": activities
		}
		
		}, function (data) {
		
			
		});
	}
	
	$scope.showNotifies = function() {
		
		
	}
	
	$scope.switchUser = function() {
        if ( $scope.wiTypes == "AllTasks") {
            
            $scope.showAllTasks();
            
        } else if ( $scope.wiTypes == "myTasks") {
            
		  $scope.showMyTasks();
        }
	}
	
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
	
};
