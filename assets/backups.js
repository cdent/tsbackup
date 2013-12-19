var app = angular.module('app', []);

app.controller('BackupsCtrl', ['$scope', function($scope) {
	var space = {};
	space.name = tiddlyweb.status.space.name;
	space.publicBag = space.name + '_public';
	space.privateBag = space.name + '_private';
	space.isSelf = (space.name === 'backups');
	space.notSelf = !space.isSelf;

	$scope.$parent.space = space;
}]);
