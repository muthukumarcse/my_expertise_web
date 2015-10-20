$(document).ready(function() {

    $("#loginBtn").click(function() {

        $( ".loginDiv" ).css('visibility','visible');
	$( ".registrationDiv" ).css('visibility','hidden');

    });
	$("#registrationBtn").click(function() {

        $( ".registrationDiv" ).css('visibility','visible');
	$( ".loginDiv" ).css('visibility','hidden');

    });

    }
    );

// Create a new angular module -- authenticate
// Create a new controller -- authenticationController and inject authenticateService to it.
var app = angular.module('authenticate', [])

app.controller('authenticationController', ['$scope','authenticateService', function($scope, authenticateService) {
	$scope.login = function() {
	authenticateService.getUsers();

}}])

// service which will make a remote http request and access the data.
app.service('authenticateService',['$http', function($http) {
	var url = 'http://localhost:8081/myexpertise_frontend/users'
	this.getUsers = function() {
	return $http.get(url);
};
}])

app.controller('registrationController', ['$scope', 'registrationService', function($scope, registrationService) {
	$scope.register = function(user) {
	// Invoke registration service to register a new user
	registrationService.register(user);
}
}])

app.service('registrationService', ['$http', function($http) {
	this.register = function(user) {
	var registrationReq = {
		url: 'http://localhost:8081/myexpertise_frontend/user/register',
		method: "POST",
		data: { 'name' : user.name, 'email': user.email, 'phone': user.phone, 'password':user.password, 'companyId':user.companyId },
		headers: {'Content-Type': 'application/json'}
	    }
	    
	   $http(registrationReq).then(function(response) {

	    }, 
	    function(response) { // optional

	    });
};

}])
