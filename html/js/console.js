'use strict';

var app = angular.module('CriteriaApp', ['ngResource','ui.bootstrap', 'ui.router','formly', 'formlyBootstrap', 'angularFileUpload', 'builder', 'builder.components', 'validator.rules'])
.factory('criteriaV1', criteriaFactory)
.config(function($stateProvider,$urlRouterProvider) {
	$stateProvider
	.state('login', {
			templateUrl: 'view/login.html',
			controller: 'loginCtrl',
		}
	)
	.state('home', {
			templateUrl: 'view/home.html',
			controller: 'homeCtrl',
		}
	)
	.state('worklist', {
			templateUrl: 'view/worklist.html',
			controller: 'worklistCtrl',
		}
	)
	.state('processinstance', {
			templateUrl: 'view/processInstance.html',
			controller: 'processInstanceCtrl',
			params: {id: null}
		}
	)
	.state('showjson', {
			templateUrl: 'view/json.html',
			controller: 'jsonCtrl',
			params: {content: null, url: null}
		}
	)
	.state('form', {
		templateUrl: 'view/form.html',
		controller: 'formCtrl',
		params: {"process": null,
				"activity": null,
				"formName": null,
				"formUrl": null
		}
	});
	
	$urlRouterProvider.otherwise('home');
})
.controller('navbarCtrl', navbarCtrl)
.controller('worklistCtrl',worklistCtrl)
.controller('homeCtrl', homeCtrl)
.controller('processInstanceCtrl', processInstanceCtrl)
.controller('loginCtrl', loginCtrl)
.controller('jsonCtrl', function($http, $resource, $scope, $log, $state, $stateParams ) {
	
	var editor = ace.edit("editor");
    editor.getSession().setMode("ace/mode/json");
    document.getElementById('editor').style.fontSize='14px';
    editor.setReadOnly(true);

	if ( $stateParams.url ) 
	{
		$http.get($stateParams.url).success(function(data) {
		
		    editor.setValue(JSON.stringify(data,null, "\t"));
	
		});
	}
	else
	{
	    editor.setValue(JSON.stringify($stateParams.content,null, "\t"));
	}
})

.directive('navbar', function() {
	return {
		controller: 'navbarCtrl',
		restrict: "A",
		templateUrl: 'view/navBar.html',
		
	};
});
