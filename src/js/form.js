function formCtrl($http, $resource, $scope, $log, $state, $stateParams,
	formlyVersion, $builder, $validator, $timeout, $location) {

	$scope.process = $stateParams.process;
	$scope.activity = $stateParams.activity;
	$scope.formName = $stateParams.formName;
	$scope.formUrl = $stateParams.formUrl;
	
    $scope.model = {};
    $scope.options = {};

    $scope.init = function  () {
        
        //retrieve form
		$http.get($scope.formUrl).success(function (data) {

			$scope.fields = data;
			$scope.originalFields = angular.copy($scope.fields);
		});
        
        //retrieve process attributes
        var cfg = {url: "/criteria/processes/instances/process/attributes?id=" +$scope.process , params: {}, method: 'GET'}
        $http(cfg).then( function(result) {
            
            var x2js = new X2JS();
            var attributes  = x2js.xml_str2json( result.data );
            $log.debug(JSON.stringify(attributes), null, 2);
            for ( var j=0; j<attributes.Attributes.Attribute.length; j++ )
            {
                $scope.model[attributes.Attributes.Attribute[j]._Name] = attributes.Attributes.Attribute[j].Value;
            }
            
        });
    }
	
	$scope.resetModel = function() {
	
		$scope.model = {};
	}; 
    
    // function definition
    $scope.onSubmit = function () {
		//vm.options.updateInitialValue();
      
		var x2js = new X2JS();
		var attributes = {
			"Attributes": {
				"Attribute": []
			}

		};


		$log.debug(JSON.stringify($scope.model), null, 2);

		for (var key in $scope.model) {
			if ($scope.model.hasOwnProperty(key)) {
				var attribute = {
					"_Name": key,
					"_Type": "STRING",
					"_Direction": "NONE",
					"Value": $scope.model[key]
				};
				for (var j = 0; j < $scope.originalFields.length; j++)
					if ($scope.originalFields[j].key == attribute._Name) {
						$log.debug(attribute);
						$log.debug($scope.originalFields[j]);
					}
				attributes.Attributes.Attribute.push(attribute);
			}
		}

		var processAttributes = x2js.json2xml_str(attributes);
		processAttributes = processAttributes.replace(/'/g,"\"");
		$log.debug(processAttributes, null, 2);
		
		//setting process Attributes
		var setAttributesUrl = "/criteria/processes/instances/process/attributes?id=" + $scope.process;
		
		$http.post(setAttributesUrl, processAttributes).then( function(result) {
			var x2js = new X2JS();
			var taskResult = x2js.xml_str2json( result.data);
			
			var cfg2 = {url: "/criteria/tasks/execute?id=" + $scope.process + "&activity=" + $scope.activity , params: {}, method: 'GET'}
			$http(cfg2).then( function(result) {
				alert("Everything is ok");
			});
		});
				
    }
	
	$scope.init();
}
