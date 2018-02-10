var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/ujjain',{
					templateUrl : 'ujjain.html',
					controller : 'ujjainCtrl'
			})
			.when('/indore', {
					templateUrl : 'indore.html',
					controller : 'indoreCtrl'
			})
			.when('/bhopal', {
					templateUrl : 'bhopal.html',
					controller : 'bhopalCtrl'
			})
			.when('/', {
				templateUrl : 'main.html',
				controller : 'homeCtrl'
			})

});
app.controller('ujjainCtrl', function($scope){
	$scope.name="ujjain";
	$scope.allData=[
		{
			name : 'rohit',
			age : 25,
			salary : 2500,
			gender : 'm'
		},
		{
			name : 'james',
			age : 25,
			salary : 3500,
			gender : 'm'
		},
		{
			name : 'jaya',
			age : 31,
			salary : 2500,
			gender : 'f'
		},
		{
			name : 'neha',
			age : 22,
			salary : 5000,
			gender : 'f'
		},
		{
			name : 'chetan',
			age : 22,
			salary : 3000,
			gender : 'm'
		},
		{
			name : 'gaurav',
			age : 27,
			salary : 2800,
			gender : 'm'
		}
	]



	
});
app.controller('indoreCtrl', function($scope){
	$scope.name="indore";
});
app.controller('bhopalCtrl', function($scope){
	$scope.name="bhopal";
});
app.controller('homeCtrl', function($scope){
	$scope.name="Home";
});
