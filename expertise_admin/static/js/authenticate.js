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
	authenticateService.getUsers().then(function (data) {
                        $scope.docs = data; 
			alert($scope.docs);
                    }, function (error) {
                        // promise rejected ... display generic no data found on table
                        console.log('error', error);
                    });

}}])

// service which will make a remote http request and access the data.
app.service('authenticateService',['$http', '$q', function($http, $q) {
        var deffered = $q.defer();
	var url = 'http://localhost:8081/myexpertise_frontend/users'
	this.getUsers = function() {
	$http.get(url).success( function(d)
	{
		console.log(d);
		deffered.resolve(d);
	});
		return deffered.promise;
};
}])

app.controller('registrationController', ['$scope','$window', 'registrationService', function($scope, $window, registrationService) {
	$scope.register = function(user) {
	// Invoke registration service to register a new user
	registrationService.register(user).then(function (data) {
                        $scope.docs = data.success; 
			if (data.success == 1)
			{
				$window.location.href ='/expertise_admin';
			}
                    }, function (error) {
                        // promise rejected ... display generic no data found on table
                        console.log('error', error);
                    });

       
	//$window.location.href ='/expertise_admin';
}
}])

app.service('registrationService', ['$http', '$q', function($http, $q) {
        var deffered = $q.defer();
	this.register = function(user) {
	var registrationReq = {
		url: 'http://localhost:8081/myexpertise_frontend/user/register',
		method: "POST",
		data: { 'name' : user.name, 'email': user.email, 'phone': user.phone, 'password':user.password, 'companyId':user.companyId },
		headers: {'Content-Type': 'application/json'}
	    }
	    
	   $http(registrationReq).then(function successCallback(response) {
			var data = response.data;
			deffered.resolve(data);
			alert('User Registered Successfully !');
                        
	    }, 
	    function errorCallback(response) { // optional
                        deffered.reject('Registration failed');
			alert('User Registration Failed	 !');
	    });
		return deffered.promise;
};

}])
