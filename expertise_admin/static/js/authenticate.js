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


angular.module('authenticate', [])
.controller('authenticationController', ['$scope', function($scope) {
$scope.login = function() {
alert($scope.userName);
}
}
])
