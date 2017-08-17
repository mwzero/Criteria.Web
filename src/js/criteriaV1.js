function criteriaFactory($http, $resource, $scope, $log, $state, $stateParams) {
    
    return {
        
        "processes": {
            "templates": "/criteria/processes/templates",
            "instances": "/criteria/processes/instances",
            "create": "/criteria/processes/templates/create",
            "get": "/criteria/processes/instances/process"
        },
        "attributes": {
            "byProcess": "/criteria/processes/instances/process/attributes"
        },
        "tasks": {
            "execute": "/criteria/tasks/execute"
        },
        "workitems": {
            "my": "/criteria/workitems",
            "all": "/criteria/activities"
        },
        "forms": {
            
        }
    }
};