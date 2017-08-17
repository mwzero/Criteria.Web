  'use strict';

  var app = angular.module('formlyExample', 
  ['formly', 'formlyBootstrap', 'angularFileUpload', 'builder', 'builder.components', 'validator.rules']);

  app.controller('MainCtrl', function MainCtrl(formlyVersion, $log, $scope,  $builder, $validator, $timeout, $location, $http) {

    var vm = this;
    
    // funcation assignment
    vm.onSubmit = onSubmit;

    vm.exampleTitle = 'Form Manager';
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };

    vm.model = {};
    vm.options = {};

    //retrieve forms
    var cfg = {url: "/forms/templates" , params: {}, method: 'GET'};
	$http(cfg).then( function(result) {
		var x2js = new X2JS();
        $scope.forms = x2js.xml_str2json( result.data ).Forms;
	}, function (result) {
        alert (result);
    });
	
    $scope.show = function (form2show) {
    var url = "forms/form?formName=" + form2show;
    $http.get(url).success(function(data) {
		
      vm.fields = data;
      vm.originalFields = angular.copy(vm.fields);
		});
    }
    
    

    // function definition
    function onSubmit() {
      //vm.options.updateInitialValue();
      
      var x2js = new X2JS();
			var attributes = { 
        "Attributes": {
          "Attribute": []
        }
          
      };
      
      
      $log.debug(JSON.stringify(vm.model), null, 2);
      
      for (var key in vm.model) {
        if (vm.model.hasOwnProperty(key)) {
          var attribute = {
            "_Name": key,
            "_Type": "STRING",
            "_Direction": "NONE",
            "Value": vm.model[key]
          };
          for (var j =0; j<vm.originalFields.length;j++ )
            if ( vm.originalFields[j].key == attribute._Name) {
              $log.debug(attribute);
              $log.debug(vm.originalFields[j]);
            }
          attributes.Attributes.Attribute.push(attribute);
        }
      }
      $log.debug(x2js.json2xml_str (attributes), null, 2);
      //call set attribute
      //call continue on process
    }
  });
