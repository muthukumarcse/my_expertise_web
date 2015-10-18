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
