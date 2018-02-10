var app = angular.module('myApp', []);


app.filter('myfilter', function(){

	return function(a, b){
		if(b<25)
			return (a*10)/100;
		if(b>=25)
			return (a*20)/100;
	}

});

app.controller('myCtrl', function($scope, $http){
$http.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded; charset=utf-8';
	$scope.type=false;
	$scope.colName='name';


	$scope.sort=function(col){
		$scope.colName=col;
		$scope.type = ! $scope.type;
	}
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
